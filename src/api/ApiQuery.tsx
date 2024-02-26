import axios from "axios";
import md5 from "md5";

const password = "Valantis";
const timestamp = "20240224";
const authString = `${password}_${timestamp}`;
const XAuth = md5(authString);

axios.defaults.headers.common["X-Auth"] = XAuth;

export class ApiQuery {
  static async getAll(limit = 50, page = 1) {
    const response = await axios.get("http://api.valantis.store:40000/", {
      params: { _limit: limit, _page: page },
    });

    const products = response.data;

    if (Array.isArray(products)) {
      products.forEach((product: { id: any; price: any; brand: any }) => {
        const id = product.id;
        const price = product.price;
        const brand = product.brand;

        console.log(`Product ID: ${id}, Price: ${price}, Brand: ${brand}`);
      });
    } else {
      console.error("Ошибка: products не является массивом");
    }
    return response;
  }

  static async getById(id: string) {
    const response = await axios.get(`http://api.valantis.store:40000/${id}`);

    const product = response.data;

    const productId = product.id;
    const productPrice = product.price;
    const productBrand = product.brand;

    console.log(
      `Product ID: ${productId}, Price: ${productPrice}, Brand: ${productBrand}`
    );

    return response;
  }
}
