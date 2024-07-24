// Profile.jsx
"use client";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserSession } from "../actions";
export default function Profile() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    async function fetchUserSession() {
      const session = await getUserSession();
      if (session) {
        setUserEmail(session.user.email);
      }
    }
    fetchUserSession();
  }, []);

  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1>Profile</h1>
        {userEmail && <p>Email: {userEmail}</p>}
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
