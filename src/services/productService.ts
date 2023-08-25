import axios from "axios";
import { Product } from "../models/products";

const productsBaseURL = `${process.env.REACT_APP_API_BASE_URL}/products`;

export const getAllProducts = async (
  maxPrice: number | null,
  includes: string | null,
  limit: number | null
): Promise<Product[]> => {
  const params = {
    ...(maxPrice !== null ? { "max-price": maxPrice } : {}),
    ...(includes ? { includes } : {}),
    ...(limit !== null ? { limit } : {}),
  };

  const response = await axios.get(productsBaseURL, { params });

  return response.data;
};

export const getTenProducts = async () => {
  const response = await axios.get(productsBaseURL, { params: { limit: 10 } });

  return response.data;
};
