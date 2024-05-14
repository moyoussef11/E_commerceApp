import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hook";

interface IItem {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  quantity?: number;
}

const Cart = ({ id, title, price, cat_prefix, img, quantity }: IItem) => {
  const dispatch = useAppDispatch();
  return (
    <div
      key={id}
      className="md:flex py-8 md:py-10 lg:py-8 border-t border-gray-50"
    >
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={img}
          alt="Black Leather Purse"
          className="h-full object-center object-cover md:block hidden"
        />
        <img
          src={img}
          alt="Black Leather Purse"
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
          {cat_prefix}
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">
            {title}
          </p>
          <div className="mainBg px-2 py-1 rounded flex items-center space-x-5 text-white capitalize font-bold">
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <p
              onClick={() => dispatch(deleteFromCart(id))}
              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            {quantity ? price * quantity : price}EGP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
