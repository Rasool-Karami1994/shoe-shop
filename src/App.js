import "./App.css";
import LayOut from "./layout/LayOut";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./context/CartProvider";
const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <LayOut>
          <Routes>
            {routes.map((route, index) => (
              <Route {...route} key={index}></Route>
            ))}
          </Routes>
        </LayOut>
        <ToastContainer />
      </CartProvider>
    </div>
  );
};

export default App;
