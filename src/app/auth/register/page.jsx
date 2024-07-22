"use client";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSumbit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSumbit={onSumbit} className="w-1/4">
      <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <input
          type="text"
          {...register("username", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <input
          type="confirmPassword"
          {...register("confirmPassword", { required: true })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />

        <button>Register</button>
      </form>
    </div>
  );
}
