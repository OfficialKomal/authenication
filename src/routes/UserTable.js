import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productAction";
import { TOKEN_KEY } from "./Login";

function UserTable() {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem(TOKEN_KEY);
    if (!loggedIn) {
      navigate("/login");
    } else {
      dispatch(getProducts());
    }
  }, []);

  if (loading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Tags</th>
            <th>Brand</th>
          </tr>
        </thead>
        {products?.map((product) => (
          <tbody key={product.id}>
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.tags.join(", ")}</td>
              <td>{product.brand}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default UserTable;
