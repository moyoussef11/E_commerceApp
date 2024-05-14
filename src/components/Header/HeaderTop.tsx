import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useAppSelector } from "@/store/hook";

const HeaderTop = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <div className="flex items-center justify-between py-4">
      <Link className="capitalize sm:text-3xl font-bold" to="/">
        our{" "}
        <span className="p-1 md:p-2 mainBg text-white rounded-xl">Atoz</span>{" "}
      </Link>
      <Link to="/cart" className="relative">
        <CiShoppingCart size={35} />
        <span className="absolute -top-2 right-2 mainBg rounded-full px-1 text-white">
          {cart.length}
        </span>
      </Link>
    </div>
  );
};

export default HeaderTop;
