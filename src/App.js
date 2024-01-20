import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from './utils/contexts';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import ThemeContext from './utils/ThemeContext';

const AboutUs = lazy(()=>{
    console.log("About Component starts loading");
   return import("./components/AboutUs");
});

// Chunking
// Code Splitting
//  Dynamic Bundling
//  Lazy loading
//  on demand loading
// Dynamic Loading

// Reducing number of http requests they introduced bundling
//  Bundling increased the initial page loading making web page slow to load
//  Introduced chunking of the bundles to reduce initial page load and these bundles are loaded once


const AppLayout = ()=>{
    const [userName, setUserName ] = useState();
    const [darkTheme, setDarkTheme ] = useState(false);
    useEffect(()=>{
        const data = {
            name: "Aiswarya Sarangi"
        };

        setUserName(data.name);
    },[]);
    return (
        <Provider store={appStore} >
            <div className="app h-screen grid grid-rows-[auto_1fr]">
                <userContext.Provider value={{userName: userName, setUserName}}>
                    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
                        <Header />
                        <Outlet />
                    </ThemeContext.Provider>
                </userContext.Provider>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h3>Loading ...</h3>}><AboutUs /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])


// console.log("app runs");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter}/>
);