import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import NavBar from "./components/NavBar";
import UserList from "./routes/UserList";
import UserTable from "./routes/UserTable";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to my demo app.</h1>
        <p>Please Login First...</p>
      </div>

      <div>
        <NavBar>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="usertable" element={<UserTable />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </NavBar>
      </div>
    </div>
  );
}

export default App;
