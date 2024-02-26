
import ProductItem from "./ProductItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const ProductList = ({ product, title, remove }) => {
  if (!product.length) {
    return <h1 style={{ textAlign: "center" }}>Not Found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {product.map((product, index) => (
          <CSSTransition key={product.id} timeout={500} classNames="post">
            <ProductItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};


