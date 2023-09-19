import Subtotal from "../subtotal/Subtotal";
import CheckoutProducts from "../CheckoutProducts";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="flex gap-2 p-5 bg-white h-full">
      <div className="right-checkout">
        <img
          className="w-full mb-[10px]"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3 className="font-bold">Hello</h3>
        <h2 className="font-bold mr-[10px] p-2 border-b-[2px] border-b-solid border-b-r-gray-500">
          Your shopping Basket
        </h2>
        {basket.map((item) => (
          <CheckoutProducts
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="left-checkout">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
