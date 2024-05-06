import Category from "@/components/Category/Category";
import Loading from "@/components/Loading/Loading";
import actGetCategory from "@/store/category/actGetCategory";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";

const Categories = () => {
  const { loading,error ,records } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(actGetCategory());
  }, [dispatch]);


  // render UI
  const showCats = records.map((record, index) => (
    <Category key={index} {...record} />
  ));

  return (
    <div className="cards px-5 sm:px-10 py-3 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <Loading state={loading} error={error} >{showCats}</Loading>
    </div>
  );
};

export default Categories;
