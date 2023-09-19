import { useContext } from "react";
import { FilterContext } from "../../../context/UseFilterContext";

const CategoryCard = ({ name }) => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div
      onClick={() => setFilter({ ...filter, category: name })}
      className={`bg-white rounded-md p-2 cursor-pointer transition-colors ${
        filter.category === name
          ? "bg-orange-500 hover:bg-orange-500 shadow-xl"
          : "hover:bg-orange-300 shadow-md"
      }`}
    >
      {name}
    </div>
  );
};

export default CategoryCard;
