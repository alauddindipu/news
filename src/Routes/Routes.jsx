import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`)
      }, {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }, {
        path: "/login",
        element: <Login></Login>
      }, {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
]);
export default routes;
