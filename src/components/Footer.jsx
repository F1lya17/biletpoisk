import React from "react";
import { NavLink } from "react-router-dom";

const Footer = function () {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <NavLink className="footer__link" to="/qa">Вопросы и ответы</NavLink>
                    <NavLink className="footer__link" to="/about">О нас</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;