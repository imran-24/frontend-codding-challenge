import { Product } from "@/types";

export const key = "PRODUCT";
export const saveToLocalStorage = (key: string, value: Product | unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key: string) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : null;
};
