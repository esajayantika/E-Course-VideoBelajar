import "../styles/auth.css";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import eyeIcon from "../assets/mdi_eye-off.svg";
import google from "../assets/logos_google-icon.svg";
import InputField from "../component/molecule/InputField.jsx";
import Button from "../component/atoms/Button.jsx";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email harus diisi!" }).email({ message: "Format email tidak valid !" }),
  password: z.string().min(8, { message: "minimal 8 karakter!" }).regex(/[A-Z]/, "Harus ada minimal 1 huruf besar!").regex(/[0-9]/, "Harus ada minimal 1 angka!"),
});

function LoginPage() {
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Lolos verifikasi
  const onSubmit = (data) => {
    console.log("User berhasil login: ", data);
    Navigate("/");
  };

  const HandleRegister = () => {
    Navigate("/register");
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: "var(--space-5) var(--space-1)" }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate id="form">
          <div className="form-header">
            <h3 className="heading-4">Masuk ke Akun</h3>
            <p className="body-medium-regular">Yuk lanjutin belajarmu di videobelajar</p>
          </div>

          <InputField id="email" labelText="E-mail" required type="email" error={errors.email?.message} {...register("email")} />

          <InputField
            id="password"
            labelText="Kata Sandi"
            required
            type="password"
            error={errors.password?.message}
            suffix={
              <button type="button" className="icon-button" aria-label="Tampilkan kata sandi">
                <img src={eyeIcon} alt="" />
              </button>
            }
            {...register("password")}
          />

          <a href="" className="body-medium-medium">
            Lupa Password?
          </a>
          <div className="button-group">
            <Button type="submit">Masuk</Button>
            <Button variant="soft" onClick={HandleRegister}>
              Daftar
            </Button>
          </div>
          <div className="divider">atau</div>
          <Button color="neutral" variant="outline" prefix={<img src={google} alt="" />}>
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
