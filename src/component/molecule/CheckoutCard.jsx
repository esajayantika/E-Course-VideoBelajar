import "./CheckoutCard.css";
import Price from "../atoms/Price";

import Materi1 from "../../assets/Checkout-icon/ujianakhir.svg";
import Materi2 from "../../assets/Checkout-icon/video.svg";
import Materi3 from "../../assets/Checkout-icon/document.svg";
import Materi4 from "../../assets/Checkout-icon/certificate.svg";
import Materi5 from "../../assets/Checkout-icon/pretest.svg";
import Language from "../../assets/Checkout-icon/language.svg";

function CheckoutCard({ price, originalPrice, kelas, discount, timediscount, children }) {
  return (
    <div className="checkout-card">
      <h4 className="heading-6">{kelas}</h4>
      <div className="checkout-price">
        <Price price={price} originalPrice={originalPrice} />
        <span className="discount">Diskon {discount}</span>
      </div>
      <span className="body-small-medium" style={{ color: "#0980E2" }}>
        Penawaran spesial terisa {timediscount} hari lagi!
      </span>
      {children}
      <h5 className="heading-6" style={{ fontSize: "14px" }}>
        Kelas ini Sudah Termasuk
      </h5>
      <div className="row g-3">
        <div className="col-6 col-md-6 body-small-regular d-flex align-items-center gap-2">
          <img src={Materi1} alt="ujian-akhir" />
          <span>Ujian Akhir</span>
        </div>
        <div className="col-6 col-md-6 body-small-regular d-flex align-items-center gap-2">
          <img src={Materi2} alt="video" />
          <span>49 Video</span>
        </div>
        <div className="col-6 col-md-6 body-small-regular d-flex align-items-center gap-2">
          <img src={Materi3} alt="document" />
          <span>7 Dokumen</span>
        </div>
        <div className="col-6 col-md-6 body-small-regular d-flex align-items-center gap-2">
          <img src={Materi4} alt="sertifikat" />
          <span>Sertifikat</span>
        </div>
        <div className="col-6 col-md-6 body-small-regular d-flex align-items-center gap-2">
          <img src={Materi5} alt="pretest" />
          <span>Pretest</span>
        </div>
      </div>
      <h5 className="heading-6" style={{ fontSize: "14px" }}>
        Bahasa Pengantar
      </h5>
      <div className="language">
        <img src={Language} alt="language" />
        <span>Bahasa Indonesia</span>
      </div>
    </div>
  );
}

export default CheckoutCard;
