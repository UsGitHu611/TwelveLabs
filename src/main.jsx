import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./pages/profile.jsx";
import Dubbing from "./pages/dubbing.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Mail from "./pages/mail.jsx";
import MailBoardLayout from "./components/UI/MailBoardLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h1>Error</h1>,
        children : [
            {
                path : "/profile",
                element : <Profile/>
            },
            {
                path : "/dubbing",
                element : <Dubbing/>
            },
            {
                path: "/mail",
                element : <Mail/>,
            },
            {
                path: "/mail/:id",
                element: <Mail/>,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
