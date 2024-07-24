"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton({ className }) {
  return (
    <button
      className={`bg-black text-white px-4 py-2 rounded-md ${className}`}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
