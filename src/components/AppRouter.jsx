import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/aboutPage/About"
import Film from "../pages/filmPage/Film"
import Home from "../pages/homePage/Home"
import Order from "../pages/orderPage/Order"
import Qa from "../pages/qaPage/Qa"

const AppRouter = () => {
    return (
        <div className='main'>
            <Routes >
                <Route exact path="/" element={<Home />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/film/:id" element={<Film />} />
                <Route exact path="/qa" element={<Qa />} />
            </Routes >
        </div>)
}

export default AppRouter;