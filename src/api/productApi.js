import axiosInstance from "./axiosInstance";

export const getAllProductByCategory = async (category) => {
  try {
    const { data } = await axiosInstance.get(`/filter.php?c=${category}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
