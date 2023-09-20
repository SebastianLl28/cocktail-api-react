import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FilterContext } from "../../../context/UseFilterContext";
import { useEffect } from "react";
import { getAllProductByCategory } from "../../../api/productApi";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Products = () => {
  const PRODUCTS_BY_PAGES = 10;

  const { filter, setFilter } = useContext(FilterContext);

  const [list, setList] = useState([]);

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { drinks } = await getAllProductByCategory(filter.category);
      return drinks;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch({
      queryKey: ["products"],
    });
  }, [filter]);
  // maxpage * (page - 1 )  | maxpage * page
  // ((page - 1) * totalPage) + 1 | maxpage * page
  //  10
  //  3
  // 11 20 , 21 30
  //  0 10 , 11 20 , 21 30 , 31 40 , 41 50 , 51 60 , 61 70 , 71 80 , 81 90 , 91 100
  useEffect(() => {
    if (!isLoading && data && !isError) {
      // const newList = data.slice(0, 10);

      if (filter.page === 1) {
        const newList = data.slice(0, PRODUCTS_BY_PAGES);
        setList(newList);
        return;
      }
      const newList = data.slice(
        (filter.page - 1) * PRODUCTS_BY_PAGES,
        filter.page * PRODUCTS_BY_PAGES
      );
      setList(newList);
    }
  }, [isLoading, data, filter]);

  return (
    <section className="py-8">
      {!isLoading && !isError && (
        <>
          <p className="text-lg py-4">
            Selecciona un cocktailde la lista para ver más detalles.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5">
            {list.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <ProductCard
                name={strDrink}
                id={idDrink}
                image={strDrinkThumb}
                key={idDrink}
              />
            ))}
          </ul>
          <Pagination
            data={data}
            isLoading={isLoading}
            refetch={refetch}
            setList={setList}
          />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {}
    </section>
  );
};

export default Products;
