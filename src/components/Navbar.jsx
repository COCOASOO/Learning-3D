"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-zinc-950 text-white px-24 h-16">
      <h1 className="text-xl font-bold">ytRatings</h1>
      <ul className="flex gap-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
