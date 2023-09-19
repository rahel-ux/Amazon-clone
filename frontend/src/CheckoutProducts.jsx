import { StarIcon } from "@heroicons/react/outline";
import { useStateValue } from "./StateProvider";

const CheckoutProducts = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () =>{
    dispatch({
        type: "Remove_From_Basket",
        id: id
    })
  }
    


    return (
      <div className="flex mt-5 mb-5">
        <div>
          <img src={image} alt="" className="object-fit m-auto" width={200} />
        </div>
        <div className="pl-5">
          <p className="my-3 text-xl font-extrabold ">{title}</p>
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="flex">
            {Array(Math.floor(rating))
              .fill()
              .map((_, i) => (
                <StarIcon key={id} className="w-5 text-yellow-500" />
              ))}
          </div>
          <button
            className="button"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        </div>
        <div />
      </div>
    );
};

export default CheckoutProducts;
