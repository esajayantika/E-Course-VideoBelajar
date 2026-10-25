import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import Linkedin from "../../assets/linkedin-logo.svg";
import Facebook from "../../assets/facebook-logo.svg";
import Instagram from "../../assets/instagram-logo.svg";
import Twitter from "../../assets/twitter-logo.svg";

function Footer() {
  return (
    <>
      <section className="about-detail">
        <img src={Logo} alt="Logo" />
        <h5 className="body-large-bold about-outro">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h5>
        <address className="course-address">
          <p className="body-medium-regular">
            Jl. Usman Effendi No.50 Lowokwaru, Malang <br />
            +62-877-7123-1234
          </p>
        </address>
        <div className="about-category">
          <div className="sub-category">
            <h4 className="body-medium-bold">Kategori</h4>
            <p>
              Digital &amp; Teknologi
              <br />
              Pemasaran
              <br />
              Manajemen Bisnis
              <br />
              Pengembangan Diri
              <br />
              Desain
            </p>
          </div>
          <div className="sub-category">
            <h4 className="body-medium-bold">Perusahaan</h4>
            <p>
              Tentang Kami
              <br />
              FAQ
              <br />
              Kebijakan Privasi
              <br />
              Ketentuan Layanan
              <br />
              Bantuan
            </p>
          </div>
          <div className="sub-category">
            <h4 className="body-medium-bold">Komunitas</h4>
            <p>
              Tips Sukses
              <br />
              Blog
            </p>
          </div>
        </div>
      </section>
      <section className="end-content">
        <div className="social-media">
          <img src={Linkedin} alt="linkedin" />
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Twitter} alt="twitter" />
        </div>
        <p className="body-medium-medium">© 2026 Hari Kiamat All Rights Reserved</p>
      </section>
    </>
  );
}

export default Footer;
