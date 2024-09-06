import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "./Login";

const UserList = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem(TOKEN_KEY);
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>User's Product List</h1>
      {data.map((product, index) => {
        return <div>{product.id + ".  " + product.title}</div>;
      })}
    </div>
  );
};

export default UserList;
