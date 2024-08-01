'use client'
import '@/styles/navbar.css';
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import LogoutButton from "@/components/LogoutButton";

export default function Navbar({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-blur text-white px-6 md:px-24 fixed w-full z-10 top-0">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-x-4">
          <h1 className="text-xl font-bold">
            <Link href="/">ytRatings</Link>
          </h1>
          <ul className="hidden md:flex gap-x-4">
            <li>
              <Link href="/about" className="block px-4 py-2 md:p-0 hover:underline">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>
        </div>
        <ul className={`hidden md:flex gap-x-4`}>
          {!session?.user ? (
            <>
              <li>
                <Link href="/auth/login" className="block px-4 py-2 md:p-0 hover:underline">Login</Link>
              </li>
              <li>
                <Link href="/auth/register" className="block px-4 py-2 md:p-0 hover:underline">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile" className="block px-4 py-2 md:p-0 hover:underline">Profile</Link>
              </li>
              <li>
                <LogoutButton className="block px-4 py-2 md:p-0 hover:underline" />
              </li>
            </>
          )}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-y-2 mt-2 bg-zinc-950 text-white p-4 rounded-lg mb-8">
            <li>
              <Link href="/about" className="block px-4 py-2 hover:underline">About Us</Link>
            </li>
            {!session?.user ? (
              <>
                <li>
                  <Link href="/auth/login" className="block px-4 py-2 hover:underline">Login</Link>
                </li>
                <li>
                  <Link href="/auth/register" className="block px-4 py-2 hover:underline">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:underline">Profile</Link>
                </li>
                <li>
                  <LogoutButton className="block px-4 py-2 hover:underline" />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
