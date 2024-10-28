"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function LoginButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } =
    useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return (
      <div className="flex gap-2 items-center">
        
          
          
          <Link href="/admin">
            {" "}
            Admin panel
            <div className="flex items-center gap-2 rounded-xl bg-blue-100 px-3 py-2 items-center">
              <img
                className="object-cover h-8 w-8 rounded-full"
                src={user?.photoURL}
                alt="User Profile"
              />
              <h1 className="font-bold text-sm">{user?.displayName}</h1>
              <h1 className="text-xs text-gray-500 text-sm sm:text-base">
                {user?.email}
              </h1>
            </div>
          </Link>
          <button
            onClick={() => {
              handleLogout();
            }}
            className="items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm sm:text-base w-full sm:w-auto"
          >
            Logout
          </button>
      </div>
    );
  }

  return (
    <section className="w-full sm:w-auto">
      <button
        onClick={() => {
          handleSignInWithGoogle();
        }}
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm sm:text-base w-full sm:w-auto"
      >
        <img className="h-6" src="/google.png" alt="Google Icon" />
        Login With Google
      </button>
    </section>
  );
}