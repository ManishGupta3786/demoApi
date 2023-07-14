import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(UserContext);
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={user?<Dashboard/>:<Login/>} />
          <Route path="/login" element={user?<Dashboard/>:<Login/>} />
          <Route path="/register" element={user?<Dashboard/>:<Register />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
