import "../styles/auth.css";
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

function RegisterPage() {
  const Navigate = useNavigate();

  const HandleLogin = () => {
    Navigate("/login");
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: "var(--space-5) var(--space-1)" }}>
        <form action="#" id="form">
          {/* Group Header */}
          <div className="form-header">
            <h3 className="heading-4">Pendaftaran Akun</h3>
            <p className="body-medium-regular">Yuk, daftarkan akunmu sekarang juga!</p>
          </div>

          <InputField id="name" labelText="Nama Lengkap" required type="text" />

          <InputField id="email" labelText="E-mail" required type="email" />
          {/* Group Jenis Kelamin */}
          <div className="input-group">
            <Label required>Jenis Kelamin</Label>
            <select name="gender" id="gender">
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
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
                <select className="body-medium-regular" name="code-number" id="code-number">
                  <option value={+62}>+62</option>
                  <option value={+1}>+1</option>
                  <option value={+65}>+65</option>
                </select>
              </div>
            }
          />

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
          <InputField
            id="password"
            labelText="Konfirmasi Kata Sandi"
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
            <Button>Daftar</Button>
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
