import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../components/hooks/useFetching";
import ApiQuery from "../api/ApiQuery";
import { Loader } from "../components/loader/Loader";

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
}

//const ProductIdPage: React.FC = () => {
 // const params = useParams<{ id: string }>();
 // const [product, setProduct] = useState<Product | null>(null);

  //const [fetchProductById, isLoading, error] = useFetching(
  //  async (id: number) => {
  //    const response = await ApiQuery.getById(id);
  //    setProduct(response.data);
  //  }
 // );

  //useEffect(() => {
  //  if (params.id) {
  //    fetchProductById(Number(params.id));
  //  }
  //}, [params.id]);

  //return (
  //  <div>
  //    <h1>Here is Product with ID = {params.id}</h1>
   //   {isLoading ? (
   //     <Loader />
   //   ) : (
    //    <div>
    //      {product?.id}. {product?.title}. {product?.price}. {product?.brand}
   //     </div>
   //   )}
 //   </div>
 // );
//};

//export default ProductIdPage;
