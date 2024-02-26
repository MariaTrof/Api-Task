import { useState, useEffect } from "react";
import { CustomSelect } from "../components/select/CustomSelect";
import { CustomInput } from "../components/select/CustomInput";
import { ApiQuery } from "../api/ApiQuery";
import "../styles/app.css";

interface Product {
  title: string;
  price: number;
  brand: string;
  [key: string]: string | number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelected] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const allProductsResponse = await ApiQuery.getAll(50, 1);
        console.log("All Products:", allProductsResponse.data);

        const productId = "123"; // Замените на реальный ID
        const productResponse = await ApiQuery.getById(productId);
        console.log("Product by ID:", productResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  const handleSearch = (value: string) => {
    setSearchQuery(value);
    filterProducts(value);
  };

  const filterProducts = (value: string) => {
    setProducts(
      [...products].filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const sortProducts = (sortBy: string) => {
    setSelected(sortBy);
    setProducts(
      [...products].sort((a, b) => {
        let valueA = a[sortBy];
        let valueB = b[sortBy];

        if (typeof valueA === "string" && typeof valueB === "string") {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <div className="app">
      <CustomInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        placeholder="Search for..."
      />

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

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Brand: {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
