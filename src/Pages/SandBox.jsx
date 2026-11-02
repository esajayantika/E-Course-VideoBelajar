import Price from "../component/atoms/Price";
import { useState } from "react";
import CheckoutCard from "../component/molecule/CheckoutCard";
import Button from "../component/atoms/Button";
import HeroDetail from "../component/Organism/HeroDetail";
import courseCollection from "../data/courseCollection.json";

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
      </div>
    </>
  );
}

export default Sandbox;
