import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
      <Outlet />
      </div>
    </div>
  );
};

export default App;
