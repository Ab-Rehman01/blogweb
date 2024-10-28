"use client"; // Ensure this component is treated as a client component

import AuthContextProvider, { useAuth } from "@/lib/contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import { useAdmin } from "@/lib/firebase/admin/read";
import Modal from "./components/Modal"; // Ensure this import path is correct
import { useState, useEffect } from "react"; // Import necessary hooks
import { useRouter } from "next/navigation"; // Use correct import for useRouter


export default function Layout({ children }) {
    return (
        <AuthContextProvider>
            <InnerLayout>{children}</InnerLayout>
        </AuthContextProvider>
    );
}

function InnerLayout({ children }) {
    const { user, isLoading: authIsLoading } = useAuth();
    const { data, error, isLoading } = useAdmin({ uid: user?.uid });
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        if (!data) {
            setShowModal(true); // Show modal if user is not an admin
        }
    }, [data]);

    if (authIsLoading || isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1>Loading...</h1> {/* Loading state */}
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>; // Error handling
    }

    const handleClose = () => {
        setShowModal(false); // Close the modal
        router.push('/'); // Redirect to home page when modal closes
    };

    // If user is not an admin, show the modal instead of the sidebar and children
    if (!data) {
        return (
            <div className="flex flex-col min-h-screen">
                {showModal && (
                    <Modal
                        message="You are not an admin."
                        onClose={handleClose} // Handle close and redirect
                    />
                )}
               
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-1">
                <Sidebar />
                {children}
            </section>
           
        </div>
    );
}
