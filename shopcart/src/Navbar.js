import './Navbar.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./DisplayProducts";

export default function Navbar(props) {
    return(
        <Router>
            <nav>
                <Link className="logo" to="/">
                    <h1>
                        Shop 2
                        <span>
                            <FontAwesomeIcon icon={faRegistered} />
                        </span>
                        eact
                    </h1>
                </Link>
                <Link to="/showCart" className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                    <span> {props.totalQuantity} </span>
                </Link>
            </nav>
            <Routes>
                <Route 
                    path="/"
                    // element={
                    //     <DisplayProducts
                    //         products={props.prods}
                    //         onIncrement={props.handleIncrement}
                    //         onDecrement={props.handleDecrement}
                    //     />
                    // }
                />
            </Routes>
        </Router>
    );
}