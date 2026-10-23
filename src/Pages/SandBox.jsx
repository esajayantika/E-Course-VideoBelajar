import Price from "../component/atoms/Price.jsx";
import Rating from "../component/atoms/Rating.jsx";
import Rate from "../component/molecule/Rate.jsx";
import Mentor from "../component/molecule/MentorProfile.jsx";
import CourseCard from "../component/Organism/CourseCard.jsx";
import Sourceimg1 from "../assets/HomeAsset/auditorcontent1.jpg";
import HeroSec from "../component/Organism/HeroSec.jsx";
import CourseCategory from "../component/molecule/CourseCategory.jsx";

function SandBox() {
  return (
    <>
      <div className="container">
        <h1>This is where u Test Component</h1>
        <Price price="Rp 100K" originalPrice="Rp 300K" />
        <Price price="Rp 300K" />
        <Rating />
        <Rate price="Rp 500K" />
        <Rate price="Rp 200K" originalPrice="Rp 100K" />
        <Mentor />
        <CourseCard imageSrc={Sourceimg1} price="Rp 300K" />
        <HeroSec />
        <CourseCategory />
      </div>
    </>
  );
}

export default SandBox;
