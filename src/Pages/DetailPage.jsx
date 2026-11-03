import "../styles/detail.css";
import { useState } from "react";

import HeroDetail from "../component/Organism/HeroDetail";
import courseCollection from "../data/courseCollection.json";
import PreviewCard from "../component/Organism/PreviewCard";
import PersonalCard from "../component/molecule/PersonalCard";
import CheckoutCard from "../component/molecule/CheckoutCard";
import Button from "../component/atoms/Button";

function DetailPage() {
  const [courses, setCourses] = useState(courseCollection);

  return (
    <>
      <HeroDetail kelas={courses[2].kelas} imageSrc={courses[2].imageSrc} />
      <div className="body-detail">
        <CheckoutCard price={"Rp. 200K"} originalPrice={"Rp.400K"} kelas={"Belajar Programming"} discount={"50%"} timediscount={"5"}>
          <Button>Beli Sekarang</Button>
        </CheckoutCard>
      </div>
    </>
  );
}

export default DetailPage;
