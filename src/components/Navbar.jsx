import { getServerSession } from "next-auth/next";
import authOptions from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton"; // Asegúrate de que la ruta es correcta

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center bg-zinc-950 text-white px-24 h-16">
      <h1 className="text-xl font-bold">ytRatings</h1>
      <ul className="flex gap-x-4">
        {!session?.user ? (
          <>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
