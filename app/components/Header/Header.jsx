"use client"

import LoginButton from './LoginButton';
import AuthContextProvider from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
<nav className="flex flex-col sm:flex-row justify-between bg-blue-200 items-center px-4 py-4 border-b shadow-md">
{/* Logo Section */}
            <Link href={'/'}>
                <img className="h-16 w-40 md:h-20 md:w-48 lg:h-24 lg:w-60" src="/logo.png" alt="Logo"/>
            </Link>

            {/* Navigation Links */}
            <ul className="flex gap-4 md:gap-6 lg:gap-8 items-center">
                <li className='flex items-center gap-1 md:gap-2 text-sm md:text-base'>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li className='flex items-center gap-1 md:gap-2 text-sm md:text-base'>
                    <Link href={'/categories'}>
                        Categories
                    </Link>
                </li>
                <li className='flex items-center gap-1 md:gap-2 text-sm md:text-base'>
                    <Link href={'/contact'}>
                        Contact Us
                    </Link>
                </li>
            </ul>

            {/* Login Button Section */}
            <AuthContextProvider>
                <div className="flex items-center gap-4">
                    <LoginButton />
                </div>
            </AuthContextProvider>
        </nav>
    );
}
