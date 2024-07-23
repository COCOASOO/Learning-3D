"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Actualiza a useRouter en lugar de useRouter de next/router

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/login");
    router.refresh()
  };

  return (
    <button onClick={handleLogout} className="text-white">
      Logout
    </button>
  );
}
