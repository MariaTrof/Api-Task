import { useNavigate } from "react-router-dom";

const ProductItem = (props: {
  product: { id: number; title: string; body: string };
  remove: Function;
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <strong>
          {props.product.id}. {props.product.title}
        </strong>
        <div>{props.product.body}</div>
      </div>
      <div>
        <button onClick={() => navigate(`/posts/${props.product.id}`)}>
          Открыть
        </button>
        <button onClick={() => props.remove(props.product)}>Удалить</button>
      </div>
    </div>
  );
};

export default ProductItem;
