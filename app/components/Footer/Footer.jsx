import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: About */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-sm leading-relaxed">
                        Welcome to our blog where we share insightful articles, guides, and tips on a wide range of topics. Stay informed and inspired!
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/about" className="hover:text-blue-400">About</Link>
                        </li>
                        <li>
                            <Link href="/categories" className="hover:text-blue-400">Categories</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook className="hover:text-blue-500" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:text-blue-400" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-pink-400" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-blue-700" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Blog Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
