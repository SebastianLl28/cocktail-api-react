import axiosInstance from "./axiosInstance";

export const getAllCategory = async () => {
  try {
    const { data } = await axiosInstance.get("/list.php?c=list");
    return data;
  } catch (error) {
    console.log(error);
  }
};
