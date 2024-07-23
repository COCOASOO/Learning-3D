"use client";
import { signOut } from "next-auth/react";

export default function Profile() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1>Profile</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-md mt-4"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </section>
  );
}
