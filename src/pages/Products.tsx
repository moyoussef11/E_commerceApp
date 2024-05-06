import Loading from "@/components/Loading/Loading";
import Product from "@/components/Product/Product";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import actProductSlice from "@/store/products/actProductSlice";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const { loading,error,records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { prefix } = useParams();


  useEffect(() => {
    if (typeof prefix == "string") {
      dispatch(actProductSlice(prefix));
    }
  }, [dispatch, prefix]);

  // render UI
  const showProduct = records.map((record, index) => (
    <Product key={index} {...record} />
  ));

  return (
    <>
      <div className="cards px-5 sm:px-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-2">
        <Loading state={loading} error={error}>{showProduct}</Loading>
      </div>
      <Link
        to={"/categories"}
        className="mainBg capitalize w-fit p-2 font-bold text-white rounded-xl pm-5 sm:mx-auto my-2"
      >
        bact to categories
      </Link>
    </>
  );
};

export default Products;
