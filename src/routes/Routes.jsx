import {
    createBrowserRouter,

} from "react-router-dom";
import Home from './../pages/Home';
import Root from "../pages/Root";
import AddCar from "../pages/AddCar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Toyota from './../pages/BrandCars/Toyota';
import Nissan from './../pages/BrandCars/Nissan';
import Bmw from './../pages/BrandCars/Bmw';
import Tesla from "../pages/BrandCars/Tesla";
import Honda from './../pages/BrandCars/Honda';
import Ford from './../pages/BrandCars/Ford';

import CarDetails from './../Components/CarDetails';
import UpdateCar from './../pages/UpdateCar';
import MyCart from './../pages/MyCart';
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/addCar",
                element: <PrivetRoute><AddCar></AddCar></PrivetRoute>,

            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
            {
                path: "/toyota",
                element: <Toyota></Toyota>,
                loader: () => fetch('http://localhost:5000/cars')

            },
            {
                path: "/nissan",
                element: <Nissan></Nissan>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/bmw",
                element: <Bmw></Bmw>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/tesla",
                element: <Tesla></Tesla>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/honda",
                element: <Honda></Honda>,
                loader: () => fetch('http://localhost:5000/cars')

            },
            {
                path: "/ford",
                element: <Ford></Ford>,
                

            },
            {
                path: `/carDetails/:id`,
                element: <CarDetails></CarDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
                

            },

            {
                path: "/updateCar/:id",
                element: <PrivetRoute><UpdateCar></UpdateCar></PrivetRoute>,             
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`) 

            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>,
               

            },
            
        ]
    }
]);

export default Routes;