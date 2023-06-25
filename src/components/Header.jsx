import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import basketImg from "../imgs/basket.svg"
import { BasketContext } from "../index";
import CountButton from "./UI/CountButton";
import { observer } from "mobx-react-lite";

const Header = observer(function () {
    const { basket } = useContext(BasketContext);

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <NavLink to="/" className="header__logo">Билетпоиск</NavLink>
                    {basket.totalCount > 0 && <CountButton className="films-count">{basket.totalCount}</CountButton>}
                    <NavLink to="/order"><img className="header__basket" alt="basket" src={basketImg}></img></NavLink>
                </div>
            </div>
        </div>
    );
})

export default Header;