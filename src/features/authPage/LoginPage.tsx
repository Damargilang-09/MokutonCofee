import { login, getCurrentUser } from "../LoginPage/api/authServiceApi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/useAuthStore";

const loginSchema = z.object({
  email: z
    .string()
    .email("Format email tidak valid")
    .min(1, "Email wajib diisi"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  
  const onSubmit = async (data: LoginForm) => {
    try {
      await login({
        email: data.email,
        password: data.password,
      });
      // cookie token sudah diset backend; ambil profil lengkap via /auth/me
      const user = await getCurrentUser();
      setUser(user);
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log("Error detail:", error.response?.data);
      }
      alert("Email atau password salah.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="fieldset">
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

        <button
          className="btn btn-neutral mt-4 w-full hover:scale-[1.02] transition-transform duration-200"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            "Login"
          )}
        </button>
        <button className="btn btn-ghost mt-1 w-full" type="reset">
          Reset
        </button>
        <p className="text-sm text-center mt-2">
          Belum punya akun?{" "}
          <Link to="/register" className="link link-hover font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
