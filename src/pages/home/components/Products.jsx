import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FilterContext } from "../../../context/UseFilterContext";
import { useEffect } from "react";
import { getAllProductByCategory } from "../../../api/productApi";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const [list, setList] = useState([]);

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { drinks } = await getAllProductByCategory(filter.category);
      console.log(drinks);
      return drinks;
    },
  });

  useEffect(() => {
    refetch({
      queryKey: ["products"],
    });
  }, [filter]);

  useEffect(() => {
    if (!isLoading && data && !isError) {
      const newList = data.slice(0, 10);
      setList(newList);
    }
  }, [isLoading, data]);

  return (
    <section className="py-8">
      {!isLoading && !isError && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5">
          {list.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <ProductCard name={strDrink} id={idDrink} image={strDrinkThumb} />
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
    </section>
  );
};

export default Products;
