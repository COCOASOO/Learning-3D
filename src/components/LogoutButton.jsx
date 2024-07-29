"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton({ className }) {
  return (
    <button
      className={`text-white ${className} hover:underline`}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
