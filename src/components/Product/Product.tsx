import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hook";

interface IProduct {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
}

const Product = ({ id, title, price, cat_prefix, img }: IProduct) => {
  const dispatch = useAppDispatch();
  

  return (
    <div
      key={id}
      className="card w-64 mx-auto sm:w-full rounded-xl flex flex-col justify-between space-y-3 p-2 bg-slate-200"
    >
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-xl"
          src={img}
          alt={title}
        />
        <span className="mainBg absolute top-1 right-1 text-white p-1 rounded-full text-sm font-semibold capitalize">
          {cat_prefix}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="mainColor capitalize font-bold">
          {title.substring(0, 16)}...
        </h3>
        <p className="text-sm font-bold text-green-500">{price} EGP</p>
      </div>
      <button
        onClick={() => dispatch(addToCart({id,title,img,cat_prefix,price}))}
        className="w-full p-1 capitalize mainBg text-white rounded-full hover:mainColor hover:bg-white duration-300"
      >
        add to cart
      </button>
    </div>
  );
};

export default Product;
