import "../styles/detail.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";

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
import CourseCard from "../component/Organism/CourseCard";
import Footer from "../component/Organism/Footer";
import { useCourses } from "../context/CourseContext";

function DetailPage() {
  const { isAdmin } = useOutletContext();
  const params = useParams();
  const { courses, coursesIsLoading } = useCourses();
  const course = courses.find((kelas) => kelas.id === params.id);

  if (coursesIsLoading || !course) return <p>Loading....</p>;

  return (
    <>
      <div className="detail-page">
        {coursesIsLoading && <p>Loading...</p>}
        <div>
          <span className="body-medium-regular">
            Home / {params.id} / {params.kelas}
          </span>
        </div>
        <HeroDetail />
        <div className="row body-detail">
          <div className="col-lg-8 col-md-7 col-12 mb-4 px-0 order-2 order-lg-1">
            <div className="deskripsi-kelas mb-4">
              <h3 className="heading-5">Deskripsi</h3>
              <p className="body-medium-regular">{course.Deskripsi}</p>
            </div>
            <div className="mentor-card">
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
            </div>

            <div className="materi">
              <h5 className="heading-5">Kamu Akan Mempelajari</h5>
              <div className="materi-group">
                <button className="menu-materi">
                  <span className=" judul-materi heading-6" style={{ color: "var(--main-primary)" }}>
                    Introduction to Course 1: Foundations of User Experience Design
                  </span>
                  <img className="icon-menu" src={DropUp} alt="dropup-icon" />
                </button>
                <div className="konten-materi">
                  <div className="konten">
                    <p className="body-medium-medium">The basics of user experience design</p>{" "}
                    <div className="tipe-konten">
                      <img src={Video} alt="type-content" /> <p className="body-medium-regular">Video</p> <img src={Duration} alt="duration" />
                      <p className="body-medium-regular">12 Menit</p>
                    </div>
                  </div>
                  <div className="konten">
                    <p className="body-medium-medium">Jobs in the field of user experience</p>{" "}
                    <div className="tipe-konten">
                      <img src={Video} alt="type-content" /> <p className="body-medium-regular">Video</p> <img src={Duration} alt="duration" />
                      <p className="body-medium-regular">12 Menit</p>
                    </div>
                  </div>
                  <div className="konten">
                    <p className="body-medium-medium">The product development life cycle</p>{" "}
                    <div className="tipe-konten">
                      <img src={Video} alt="type-content" /> <p className="body-medium-regular">Video</p> <img src={Duration} alt="duration" />
                      <p className="body-medium-regular">12 Menit</p>
                    </div>
                  </div>
                </div>
                <button className="menu-materi">
                  <span className=" judul-materi heading-6" style={{ color: "var(--main-primary)" }}>
                    Universal design, inclusive design, and equity-focused design
                  </span>
                  <img className="icon-menu" src={DropDown} alt="dropup-icon" />
                </button>
                <button className="menu-materi">
                  <span className=" judul-materi heading-6" style={{ color: "var(--main-primary)" }}>
                    Introduction to design sprints
                  </span>
                  <img className="icon-menu" src={DropDown} alt="dropup-icon" />
                </button>
                <button className="menu-materi">
                  <span className=" judul-materi heading-6" style={{ color: "var(--main-primary)" }}>
                    Introduction to UX research
                  </span>
                  <img className="icon-menu" src={DropDown} alt="dropup-icon" />
                </button>
              </div>
            </div>
            <div className="mentor-card">
              <PreviewCard heading={"Rating dan Review"}>
                <PersonalCard
                  name={"Gregorius Edrik Lawanto"}
                  position={"Alumni Batch 2"}
                  desc={"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."}
                  showRating
                />
                <PersonalCard
                  name={"Gregorius Edrik Lawanto"}
                  position={"Alumni Batch 4"}
                  desc={"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."}
                  showRating
                />
              </PreviewCard>
            </div>
            <div className="courses-title">
              <h1 className="heading-3" style={{ lineHeight: "1.1" }}>
                Video Pembelajaran Terkait Lainnya
              </h1>
              <h3 className="body-medium-medium">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-12 px-0 ps-lg-4 order-1 order-lg-2" style={{ marginBottom: "30px" }}>
            <CheckoutCard price={"Rp. 200K"} originalPrice={"Rp.400K"} kelas={params.kelas} discount={"50%"} timediscount={"5"}>
              <Button>Beli Sekarang</Button>
            </CheckoutCard>
          </div>
        </div>
        <div className="courses-grid">
          {/* Read all Array courseCollection.json */}
          {courses
            .filter((kelas) => kelas.id !== params.id)
            .slice(0, 3)
            .map((course) => (
              <CourseCard key={course.id} course={course} isAdmin={isAdmin} name={"Jenna Ortega"} position={"Senior Accountant"} company={"Gojek"} />
            ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DetailPage;
