import { useMemo } from "react";

interface Product {
  title: string;
  price: number;
  brand: string;
  [key: string]: any;
}

export const useSortedProduct = (product: Product[], sort: string) => {
  const sortedProduct = useMemo(() => {
    if (sort) {
      return [...product].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return product;
  }, [sort, product]);

  return sortedProduct;
};

export const useProduct = (product: Product[], sort: string, query: string) => {
  const sortedProduct = useSortedProduct(product, sort);

  const sortedAndSearchedProduct = useMemo(() => {
    return sortedProduct.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedProduct]);

  return sortedAndSearchedProduct;
};