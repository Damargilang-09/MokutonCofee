import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContact } from "../api/useContactApi";

const contactSchema = z.object({
  firstName: z.string().min(1, "Nama depan wajib diisi"),
  lastName: z.string().min(1, "Nama belakang wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      await createContact(data);
      reset();
    } catch {
      alert("Gagal mengirim pesan. Coba lagi.");
    }
  };

  return (
    <>
      <div>
        <p>
          Tim Customer Support dan Account Management kita, berusaha sebaik
          mungkin untuk memberikan servis yang baik kepada anda. Kami memiliki
          passion yang kuat terhadap setiap produk yang kita tawarkan dan itu
          dapat dilihat dari servis yang kita tawarkan. Kita sangat berharap
          dapat memenuhi kebutuhan anda dalam waktu kurang dari 48 jam.
        </p>
      </div>

      {isSubmitSuccessful && (
        <div className="alert alert-success mt-4 text-sm">
          Pesan berhasil dikirim! Kami akan segera menghubungi kamu.
        </div>
      )}

      <div className="md:w-full pt-10 pr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className={`input w-full ${errors.firstName ? "input-error" : ""}`}
              placeholder="Type here"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-error text-xs mt-1">{errors.firstName.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              className={`input w-full ${errors.lastName ? "input-error" : ""}`}
              placeholder="Type here"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-error text-xs mt-1">{errors.lastName.message}</p>
            )}
          </fieldset>

          <div className="col-span-1 md:col-span-2">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">E-Mail</legend>
              <input
                type="email"
                className={`input w-full ${errors.email ? "input-error" : ""}`}
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-error text-xs mt-1">{errors.email.message}</p>
              )}
            </fieldset>
          </div>

          <div className="col-span-1 md:col-span-2">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Message</legend>
              <textarea
                placeholder="Tulis pesanmu di sini..."
                className={`textarea textarea-bordered w-full h-40 ${errors.message ? "textarea-error" : ""}`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-error text-xs mt-1">{errors.message.message}</p>
              )}
            </fieldset>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="btn hover:scale-[1.02] transition-transform duration-200"
              style={{ backgroundColor: "#7D9B76", borderColor: "#7D9B76", color: "white" }}
            >
              {isSubmitting ? <span className="loading loading-spinner loading-sm" /> : "Kirim Pesan"}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}