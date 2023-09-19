import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter"
import { useStateValue } from "../StateProvider";
const Products = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
const [{basket}, dispatch] = useStateValue();
// console.log("this is basket", basket)
const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
}

return (
    <>
      <div className="relative m-5 bg-white z-20 p-10">
        <div>
          <p className="absolute top-2 right-2 text-gray-400 italic text-sm">
            {category}
          </p>
        </div>
        <div>
          <img src={image} alt="" className="object-fit mx-auto w-[200px]"  />
        </div>
        <div>
          <p className="my-3">{title}</p>
          <div className="flex">
            {Array(Math.floor(rating))
              .fill()
              .map((_, i) => (
                <StarIcon key={id} className="w-5 text-yellow-500" />
              ))}
          </div>

          <div>
            <p className="text-xs line-clamp-2">{description}</p>
          </div>

          <div className="mb-5">
            <Currency quantity={price} currency="USD" />
          </div>
          <button className="button" onClick={addToBasket}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Products