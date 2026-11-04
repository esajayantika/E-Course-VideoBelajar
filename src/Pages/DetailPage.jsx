import "../styles/detail.css";
import { useState } from "react";

import HeroDetail from "../component/Organism/HeroDetail";
import courseCollection from "../data/courseCollection.json";
import PreviewCard from "../component/Organism/PreviewCard";
import PersonalCard from "../component/molecule/PersonalCard";
import CheckoutCard from "../component/molecule/CheckoutCard";
import Button from "../component/atoms/Button";
import DropDown from "../assets/Icondropdown.svg";
import DropUp from "../assets/HomeAsset/Chevron_Up.svg";
import Video from "../assets/HomeAsset/Play_Circle.svg";
import Duration from "../assets/HomeAsset/Clock.svg";

function DetailPage() {
  const [courses, setCourses] = useState(courseCollection);

  return (
    <>
      <HeroDetail kelas={courses[2].kelas} imageSrc={courses[2].imageSrc} />
      <div className="row body-detail">
        <div className="col-lg-8 col-md-7 col-12 mb-4 g-3 order-2 order-lg-1">
          <div className="deskripsi-kelas mb-4">
            <h3 className="heading-5">Deskripsi</h3>
            <p className="body-medium-regular">
              Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna.
              Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran
              seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk
              mendapatkan umpan balik.
            </p>
          </div>
          <PreviewCard heading={"Belajar Bersama Tutor Profesional"}>
            <PersonalCard
              name={"Gregorius Edrik Lawanto"}
              position={"Senior Talent Acquisition"}
              company={"WingsGroup"}
              desc={"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."}
            />
            <PersonalCard
              name={"Prabowo Subianto"}
              position={"President"}
              company={"Indonesia"}
              desc={
                "Mari sukseskan MBG. Ayo sumbang pajak dari segala lini sampai tai dipajakin. Dari Sabang Sampai merauke harus setor pajak. Hutan Dibabat demi kebun sawit kesayangan. Nepotisme dan oligarki adalah jalan ninjaku. Mas Teddy kesayangan akoehhh. Gaji guru tidak penting sukseskan MBG dapat insentif 3 Trilyun."
              }
            />
          </PreviewCard>

          <div className="materi">
            <h5 className="heading-5">Kamu Akan Mempelajari</h5>
            <div className="materi-group">
              <button className="menu-materi">
                <span className="heading-6" style={{ color: "var(--main-primary)" }}>
                  Introduction to Course 1: Foundations of User Experience Design
                </span>
                <img src={DropUp} alt="dropup-icon" />
              </button>
              <div className="konten-materi">
                <div className="konten">
                  <p className="body-large-regular">The basics of user experience design</p>{" "}
                  <div className="tipe-konten">
                    <img src={Video} alt="type-content" /> <span>Video</span> <img src={Duration} alt="duration" />
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="konten">
                  <p className="body-large-regular">Jobs in the field of user experience</p>{" "}
                  <div className="tipe-konten">
                    <img src={Video} alt="type-content" /> <span>Video</span> <img src={Duration} alt="duration" />
                    <span>12 Menit</span>
                  </div>
                </div>
                <div className="konten">
                  <p className="body-large-regular">The product development life cycle</p>{" "}
                  <div className="tipe-konten">
                    <img src={Video} alt="type-content" /> <span>Video</span> <img src={Duration} alt="duration" />
                    <span>12 Menit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12 g-3 order-1 order-lg-2" style={{ padding: "0px" }}>
          <CheckoutCard price={"Rp. 200K"} originalPrice={"Rp.400K"} kelas={"Belajar Programming"} discount={"50%"} timediscount={"5"}>
            <Button>Beli Sekarang</Button>
          </CheckoutCard>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
