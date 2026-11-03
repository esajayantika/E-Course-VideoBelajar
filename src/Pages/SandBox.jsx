import Price from "../component/atoms/Price";
import { useState } from "react";
import CheckoutCard from "../component/molecule/CheckoutCard";
import Button from "../component/atoms/Button";
import HeroDetail from "../component/Organism/HeroDetail";
import courseCollection from "../data/courseCollection.json";
import PersonalCard from "../component/molecule/PersonalCard";
import PreviewCard from "../component/Organism/PreviewCard";

function Sandbox() {
  const [courses, setCourses] = useState(courseCollection);

  return (
    <>
      <div className="container">
        <HeroDetail kelas={courses[1].kelas} imageSrc={courses[1].imageSrc} />
        <Price originalPrice={"Rp. 400K"} price={"Rp. 200K"} />
        <CheckoutCard price={"Rp. 200K"} originalPrice={"Rp.400K"} kelas={"Belajar Programming"} discount={"50%"} timediscount={"5"}>
          <Button>Beli Sekarang</Button>
        </CheckoutCard>
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
    </>
  );
}

export default Sandbox;
