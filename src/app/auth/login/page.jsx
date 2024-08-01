"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      console.log("Inicio de sesión exitoso");
      router.push("/profile");
    }
  });

  const handleGoogleSignIn = async () => {
    const res = await signIn("google", { redirect: false });
    if (res?.error) {
      setError(res.error);
    } else {
      console.log("Inicio de sesión con Google exitoso");
      router.push("/profile");
    }
  };

  return (
    <div className="min-h-screen h-screen overflow-hidden flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 mt-16 md:mt-0">
        <h1 className="text-gray-800 font-bold text-3xl mb-4 text-center">
          Login
        </h1>
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
            {error}
          </p>
        )}
        <form onSubmit={onSubmit}>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="p-3 rounded block mb-4 bg-gray-200 text-gray-800 w-full"
            placeholder="mail@example.com"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <label htmlFor="password" className="text-gray-600 mb-2 block">
            Password:
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="p-3 rounded block mb-4 bg-gray-200 text-gray-800 w-full"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <button className="w-full bg-black hover:bg-gray-800 p-3 rounded-lg text-white mt-2 transition-colors">
            Sign in
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-600">or</span>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-black hover:bg-gray-800 p-3 rounded-lg text-white mt-2 flex items-center justify-center transition-colors"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          If you don&apos;t have an account, please{" "}
          <Link href="/auth/register" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
