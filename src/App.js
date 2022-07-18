import "./App.css";
import LayOut from "./layout/LayOut";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="App">
      <LayOut>
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index}></Route>
          ))}
        </Routes>
      </LayOut>
      <ToastContainer />
    </div>
  );
};

export default App;
