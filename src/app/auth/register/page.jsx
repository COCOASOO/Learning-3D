"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <div className="min-h-screen h-screen overflow-hidden flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 mt-16 md:mt-0">
        <h1 className="text-gray-800 font-bold text-3xl mb-4 text-center">
          Register
        </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="username" className="text-gray-600 mb-2 block">
            Username:
          </label>
          <input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            className="p-3 rounded block mb-4 bg-gray-200 text-gray-800 w-full"
            placeholder="username"
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}

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
            placeholder="user@gmail.com"
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
            placeholder="**********"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <label htmlFor="confirmPassword" className="text-gray-600 mb-2 block">
            Confirm Password:
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
            })}
            className="p-3 rounded block mb-4 bg-gray-200 text-gray-800 w-full"
            placeholder="**********"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}

          <button className="w-full bg-black hover:bg-gray-800 p-3 rounded-lg text-white mt-2 flex items-center justify-center transition-colors">
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
