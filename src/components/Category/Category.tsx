import { Link } from "react-router-dom";
// import product from "../../assets/features-03.jpg";

interface TCat {
  id: number;
  title: string;
  prefix: string;
  img: string;
}

const Category = ({ id, title, prefix, img }: TCat) => {
  return (
    <Link to={`products/${prefix}`} key={id}>
      <div className="card w-64 mx-auto sm:w-full rounded-xl text-center flex flex-col space-y-2 p-2 bg-slate-200">
        <img
          className="w-full h-full object-cover rounded-xl hover:scale-105 duration-300"
          src={img}
          alt={title}
        />
        <p className="mainColor text-2xl font-bold capitalize">{title}</p>
      </div>
    </Link>
  );
};

export default Category;
