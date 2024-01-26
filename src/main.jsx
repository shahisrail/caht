import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home.jsx";
import Room from "./Room/Room.jsx";
import CourseDetails from "./Pages/Course/CourseDetails.jsx";
import Succsess from "./Pages/PaymentSuccses/Succsess.jsx";
import PayFaield from "./Pages/PaymentSuccses/PaymentFailed/PayFaield.jsx";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/room/:roomId",
        element: <Room/>
      },
      {
        path:'/CourseDetails/:id',
        element:<CourseDetails/>,    
      },
      {
        path:'/payment/succsess/:tranID',
        element:<Succsess/>    
      },
      {
        path:'/payment/fail/:tranID',
        element:<PayFaield/>
      }
      
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
