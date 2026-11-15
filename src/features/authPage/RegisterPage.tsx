import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { register as registerUser } from "../LoginPage/api/authServiceApi";

const registerSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z
    .string()
    .email("Format email tidak valid")
    .min(1, "Email wajib diisi"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setServerError(null);
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      navigate("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = (error.response?.data as { error?: string } | undefined)?.error;
        setServerError(message ?? "Registrasi gagal. Coba lagi.");
      } else {
        setServerError("Registrasi gagal. Coba lagi.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="fieldset">
          <label className="label">Nama</label>
          <input
            type="text"
            className={`input validator w-full ${errors.name ? "input-error" : ""}`}
            placeholder="Nama"
            {...register("name")}
          />
          <p className="validator-hint text-error text-xs mt-1">
            {errors.name?.message}
          </p>
        </fieldset>

        <fieldset className="fieldset mt-2">
          <label className="label">Email</label>
          <input
            type="email"
            className={`input validator w-full ${errors.email ? "input-error" : ""}`}
            placeholder="Email"
            {...register("email")}
          />
          <p className="validator-hint text-error text-xs mt-1">
            {errors.email?.message}
          </p>
        </fieldset>

        <fieldset className="fieldset mt-2">
          <label className="label">Password</label>
          <input
            type="password"
            className={`input validator w-full ${errors.password ? "input-error" : ""}`}
            placeholder="Password"
            {...register("password")}
          />
          <p className="validator-hint text-error text-xs mt-1">
            {errors.password?.message}
          </p>
        </fieldset>

        {serverError && (
          <p className="text-error text-xs mt-2">{serverError}</p>
        )}

        <button
          className="btn btn-neutral mt-4 w-full hover:scale-[1.02] transition-transform duration-200"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Register"
          )}
        </button>
        <p className="text-sm text-center mt-2">
          Sudah punya akun?{" "}
          <Link to="/login" className="link link-hover font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
