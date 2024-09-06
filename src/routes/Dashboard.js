import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "./Login";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem(TOKEN_KEY);
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  const onPressHandler = () => {
    navigate("/usertable");
  };

  return (
    <div>
      <h1>Welcome to Dashboard !!!</h1>

      <button onClick={() => onPressHandler()}>View User Products</button>
    </div>
  );
}

export default Dashboard;
