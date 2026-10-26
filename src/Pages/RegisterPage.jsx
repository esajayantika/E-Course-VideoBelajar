import "../styles/auth.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import eyeIcon from "../assets/mdi_eye-off.svg";
import google from "../assets/logos_google-icon.svg";
import Flag from "../assets/Indonesia (ID).svg";
import InputField from "../component/molecule/InputField.jsx";
import Button from "../component/atoms/Button.jsx";
import Label from "../component/atoms/Label.jsx";

const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Minimal 3 Karakter!" }),
    email: z.string().min(1, { message: "Email harus diisi!" }).email({ message: "Format email tidak valid !" }),
    gender: z.enum(["Pria", "Wanita"], { message: "Silahkan pilih jenis kelamin yang valid!" }),
    phonecode: z.enum(["+62", "+61", "+65"], { message: "Invalid code!" }),
    phone: z
      .string()
      .transform((val) => val.replace(/\D/g, "").replace(/^0+/, ""))
      .pipe(z.string().min(8, { message: "No.HP Minimal 8 Digit!" }).max(13, { message: "No.HP Maksimal 13 Digit!" })),
    password: z.string().min(8, { message: "Minimal 8 karakter!" }).regex(/[A-Z]/, { message: "Harus ada minimal 1 huruf besar!" }).regex(/[0-9]/, { message: "Harus ada minimal 1 angka!" }),
    repeatPassword: z.string(),
  })
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["repeatPassword"],
        message: "Password tidak sama!",
      });
    }
  });

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // Lolos verifikasi
  const onSubmit = (data) => {
    // gabungkan no.hp dari inputan codephone dan phone

    const fullPhone = `${data.phonecode}${data.phone}`;
    console.log("User terdaftar: ", { ...data, phone: fullPhone });

    alert("Berhasil Mendaftarkan Akun!");
    Navigate("/login");
  };

  const HandleLogin = () => {
    Navigate("/login");
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: "var(--space-5) var(--space-1)" }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate id="form">
          {/* Group Header */}
          <div className="form-header">
            <h3 className="heading-4">Pendaftaran Akun</h3>
            <p className="body-medium-regular">Yuk, daftarkan akunmu sekarang juga!</p>
          </div>

          <InputField id="name" labelText="Nama Lengkap" required type="text" error={errors.name?.message} {...register("name")} />

          <InputField id="email" labelText="E-mail" required type="email" error={errors.email?.message} {...register("email")} />

          {/* Group Jenis Kelamin */}
          <div className="input-group">
            <Label required>Jenis Kelamin</Label>
            <select id="gender" {...register("gender")}>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
            {errors.gender && <span style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.gender.message}</span>}
          </div>

          <InputField
            id="phone-number"
            labelText="No. HP"
            required
            type="text"
            inputMode="numeric"
            prefix={
              <div className="flag-box">
                <span className="flag-frame">
                  <img src={Flag} alt="indonesia" className="flag-icon" />
                </span>
                <select className="body-medium-regular" id="code-number" {...register("phonecode")}>
                  <option value="+62">+62</option>
                  <option value="+61">+61</option>
                  <option value="+65">+65</option>
                </select>
              </div>
            }
            error={[errors.phonecode?.message, errors.phone?.message].filter(Boolean).join(", ")}
            {...register("phone")}
          />

          <InputField
            id="password"
            labelText="Kata Sandi"
            required
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
            suffix={
              <button type="button" className="icon-button" aria-label="Tampilkan kata sandi" onClick={() => setShowPassword((prev) => !prev)}>
                <img src={eyeIcon} alt="" />
              </button>
            }
            {...register("password")}
          />
          <InputField
            id="password"
            labelText="Konfirmasi Kata Sandi"
            required
            type={confirmPassword ? "text" : "password"}
            error={errors.repeatPassword?.message}
            suffix={
              <button type="button" className="icon-button" aria-label="Tampilkan kata sandi" onClick={() => setConfirmPassword((prev) => !prev)}>
                <img src={eyeIcon} alt="" />
              </button>
            }
            {...register("repeatPassword")}
          />

          <div className="button-group">
            <Button type="submit">Daftar</Button>
            <Button variant="soft" onClick={HandleLogin}>
              Masuk
            </Button>
          </div>
          <div className="divider">atau</div>
          <Button color="neutral" variant="outline" prefix={<img src={google} alt="" />}>
            Daftar dengan Google
          </Button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
