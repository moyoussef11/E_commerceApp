import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";


const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <Link className="capitalize sm:text-3xl font-bold" to="/">
        our{" "}
        <span className="p-1 md:p-2 mainBg text-white rounded-xl">
          Atoz
        </span>{" "}
      </Link>
      <div className="relative">
        <CiShoppingCart size={35} />
        <span className="absolute -top-2 right-2 mainBg rounded-full px-1 text-white">
          0
        </span>
      </div>
    </div>
  );
}

export default HeaderTop