import { useState } from "react";
import { CustomSelect } from "../components/select/CustomSelect";
import { CustumInput } from "../components/select/CustomeInput";

interface Product {
  title: string;
  price: number;
  brand: string;
  [key: string]: string | number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([
    { title: "Product 1", price: 100, brand: "honor" },
    { title: "fghjroduct 2", price: 200, brand: "MacBook" },
  ]);
const [serchQuery, setSearchQuery] = useState("");
 const [selectedSort, setSelected] =useState<string>("");
const sortProducts = (sortBy: string) => { 
      setSelected(sortBy);
        setProducts([...products].sort((a, b) => {
            if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
                return (a[sortBy] as string).localeCompare(b[sortBy] as string);
            }
            return 0;
        }));
    };
  return (
    <div>
      <CustumInput type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
       placeholder="Search for..."/>
   <CustomSelect 
   value={selectedSort}
   onChange={(sort) => sortProducts(sort)}
   defaultValue="Sort by"
   options={[
    { value: "title", name: "Title" },
    { value: "price", name: "Price" },
    { value: "brand", name: "Brand" },
   ]}
   />
    </div>
  );
}

export default App
