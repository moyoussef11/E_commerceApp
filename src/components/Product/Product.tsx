
interface IProduct {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
}

const Product = ({ id, title, price, cat_prefix,img }: IProduct) => {
  return (
    <div key={id}  className="card w-64 mx-auto sm:w-full rounded-xl flex flex-col justify-between space-y-2 p-2 bg-slate-200">
      <div className="relative">
        <img
          className="w-full h-52 object-cover rounded-xl"
          src={img}
          alt={title}
        />
        <span className="mainBg absolute top-1 right-1 text-white p-1 rounded-full text-sm font-semibold capitalize">
          {cat_prefix}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="mainColor capitalize font-bold">{title}</h3>
        <p className="text-sm font-bold text-green-500">{price} EGP</p>
      </div>
    </div>
  );
};

export default Product;