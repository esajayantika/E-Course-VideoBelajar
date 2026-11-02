import Price from "../component/atoms/Price";
import CheckoutCard from "../component/molecule/CheckoutCard";
import Button from "../component/atoms/Button";

function Sandbox() {
  return (
    <>
      <div className="container">
        <Price originalPrice={"Rp. 400K"} price={"Rp. 200K"} />
        <CheckoutCard price={"Rp. 200K"} originalPrice={"Rp.400K"} kelas={"Belajar Programming"} discount={"50%"} timediscount={"5"}>
          <Button>Beli Sekarang</Button>
        </CheckoutCard>
      </div>
    </>
  );
}

export default Sandbox;
