import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FilterContext } from "../../../context/UseFilterContext";

const Pagination = ({ data, isLoading, refetch, setList }) => {
  const PRODUCTS_BY_PAGES = 10;

  const { filter, setFilter } = useContext(FilterContext);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!isLoading && data) {
      setTotalPages(Math.ceil(data.length / PRODUCTS_BY_PAGES));
    }
  }, []);

  return (
    <div className="flex justify-center gap-3 py-6">
      {totalPages > 0 &&
        Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`shadow py-2 px-3 ${
              filter.page === index + 1 && "bg-orange-500"
            }`}
            onClick={() => setFilter({ ...filter, page: index + 1 })}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
