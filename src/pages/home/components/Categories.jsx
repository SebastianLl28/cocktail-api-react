import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../../api/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategory(),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      {isLoading && <p>Loading...</p>}
      {!isLoading && !isError && (
        <ul className="flex gap-4 flex-wrap">
          {data.drinks.map((item, index) => (
            <CategoryCard key={index} name={item.strCategory} />
          ))}
        </ul>
      )}
      {!isLoading && isError && <p>Error :c</p>}
    </div>
  );
};

export default Categories;
