"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import LogoutButton from "@/components/LogoutButton";

export default function Navbar({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 text-white px-6 md:px-24">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">
          <Link href="/">ytRatings</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars />
          </button>
        </div>
        <ul className={`hidden md:flex gap-x-4`}>
          {!session?.user ? (
            <>
              <li>
                <Link href="/auth/login" className="block px-4 py-2 md:p-0">Login</Link>
              </li>
              <li>
                <Link href="/auth/register" className="block px-4 py-2 md:p-0">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile" className="block px-4 py-2 md:p-0">Profile</Link>
              </li>
              <li>
                <LogoutButton className="block px-4 py-2 md:p-0" />
              </li>
            </>
          )}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-y-2 mt-2">
            {!session?.user ? (
              <>
                <li>
                  <Link href="/auth/login" className="block px-4 py-2">Login</Link>
                </li>
                <li>
                  <Link href="/auth/register" className="block px-4 py-2">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/profile" className="block px-4 py-2">Profile</Link>
                </li>
                <li>
                  <LogoutButton className="block px-4 py-2" />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
