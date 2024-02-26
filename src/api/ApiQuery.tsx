import express from "express";
import { Request, Response } from "express";
import axios from "axios";
import md5 from "md5";

const app = express();

app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

const password = "Valantis";
const timestamp = "20240224";
const authString = `${password}_${timestamp}`;
const XAuth = md5(authString);

axios.defaults.headers.common["X-Auth"] = XAuth;

app.get("/", async (req: Request, res: Response) => {
  try {
    const limit = req.query._limit || 50;
    const page = req.query._page || 1;

    const response = await axios.get("http://api.valantis.store:40000/", {
      params: { _limit: limit, _page: page },
    });

    const products = response.data;

    if (Array.isArray(products)) {
      products.forEach((product) => {
        const { id, price, brand } = product;
        console.log(`Product ID: ${id}, Price: ${price}, Brand: ${brand}`);
      });
    } else {
      console.error("Ошибка: products не является массивом");
    }

    res.json(response.data);
  } catch (error: any) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`http://api.valantis.store:40000/${id}`);

    const product = response.data;
    const { id: productId, price: productPrice, brand: productBrand } = product;

    console.log(
      `Product ID: ${productId}, Price: ${productPrice}, Brand: ${productBrand}`
    );

    res.json(product);
  } catch (error: any) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

export default app;