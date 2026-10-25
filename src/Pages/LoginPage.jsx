import "../styles/auth.css";
import { useNavigate } from "react-router";

import eyeIcon from "../assets/mdi_eye-off.svg";
import google from "../assets/logos_google-icon.svg";
import InputField from "../component/molecule/InputField.jsx";
import Button from "../component/atoms/Button.jsx";

function LoginPage() {
  const Navigate = useNavigate();

  const HandleRegister = () => {
    Navigate("/register");
  };

  const HandleHome = () => {
    Navigate("/home");
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: "var(--space-5) var(--space-1)" }}>
        <form action="#" id="form">
          <div className="form-header">
            <h3 className="heading-4">Masuk ke Akun</h3>
            <p className="body-medium-regular">Yuk lanjutin belajarmu di videobelajar</p>
          </div>

          <InputField id="email" labelText="E-mail" required type="email" />

          <InputField
            id="password"
            labelText="Kata Sandi"
            required
            type="password"
            suffix={
              <button type="button" className="icon-button" aria-label="Tampilkan kata sandi">
                <img src={eyeIcon} alt="" />
              </button>
            }
          />
          <a href="" className="body-medium-medium">
            Lupa Password?
          </a>
          <div className="button-group">
            <Button onClick={HandleHome}>Masuk</Button>
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
