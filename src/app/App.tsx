import axios from "axios";
import md5 from "md5";
import { useState, useEffect } from "react";
import { CustomSelect } from "../components/select/CustomSelect";
import { CustomInput } from "../components/select/CustomInput";
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
        const password = "Valantis";
        const timestamp = "20240224";
        const authString = `${password}_${timestamp}`;
        const XAuth = md5(authString);

        axios.defaults.headers.common["X-Auth"] = XAuth;

        const limit = 50; // default limit
        const page = 1; // default page

        const response = await axios.get("http://api.valantis.store:40000/", {
          params: { _limit: limit, _page: page },
        });

        const productsData = response.data;

        setProducts(productsData);

        if (Array.isArray(productsData)) {
          productsData.forEach((product) => {
            const { id, price, brand } = product;
            console.log(`Product ID: ${id}, Price: ${price}, Brand: ${brand}`);
          });
        } else {
          console.error("Error: productsData is not an array");
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          // Handle specific error
        } else {
          // Handle other errors
        }
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
