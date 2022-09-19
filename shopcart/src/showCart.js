import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from  "react-router-dom";
import { Button, ListGroup, ListGroupItem} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './DisplayProducts.css';

export default function ShowCart(props){
    return(
        <div>
            <h3 className="mx-5 pt-x">Your Cart Items</h3>
            <div>
                {props.products.map(product => {
                    if(product.value > 0){
                        return(
                            <ListGroup>
                                <ListGroupItem key={product.id} className="product">
                                    <div className="displayP">
                                        <img 
                                            src={product.image} 
                                            alt={product.desc} 
                                            width="150" 
                                        />
                                        <h6>{product.desc}</h6>
                                    </div>

                                    <div className="displayQty">
                                        <h6>
                                            <strong>Quantity: {product.value} </strong>
                                        </h6>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        );
                    }
                })}
                <Checkout totalQuantity={ props.totalQuantity } />
            </div>
        </div>
    );
}

const Checkout = ({ totalQuantity }) => {
    return totalQuantity > 0 ? (
        <div className="products checkout-btn">
            <Link to="/signin">
                <Button color="primary" className="m-5">
                    Check Out
                </Button>
            </Link>
            <Outlet />
        </div>
    ) : (
        <div className="cart-number-items">
            <h4 className="mx-5 pt-3">There are 0 items in your cart.</h4>
            <Link to="/">
                <Button color="primary" className="m-5">
                    Continue Shop
                </Button>
            </Link>
        </div>
    );
};