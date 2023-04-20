import "./App.css";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from "./screens/SignUp";
import Cart from "./screens/Cart";
import MyOrders from "./screens/MyOrders";
function App() {
  return (
  <Router>
      <div className="bg-dark">
         <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/createuser" element={<SignUp/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/order" element={<MyOrders/>}/>
         </Routes>
      </div>
  </Router>
  );
}

export default App;
