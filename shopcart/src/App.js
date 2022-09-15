import './App.css';
import React, { Component } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import Navbar from "./Navbar";
import DisplayProducts from "./DisplayProducts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          qt: 0,
          value: 0,
          ratings: 3.4,
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          qt: 0,
          value: 0,
          ratings: 4.5,
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          qt: 0,
          value: 0,
          ratings: 3.3,
        },
        {
          id: 3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          qt: 0,
          value: 0,
          ratings: 3.8,
        }
      ],
    };
  }

  handleIncrement = (addValue) => {
    if(addValue.value < 10) {
      const updateValue = addValue.value++;
      this.setState({ updateValue });
    }
  };

  handleDecrement = (subtractValue) => {
    if(subtractValue.value < 10) {
      const updateValue = subtractValue.value--;
      this.setState({ updateValue });
    }
  };

  render() {
    return(
      <div className="App">
        <Navbar 
          totalQuantity={this.state.products
            .map((p) => p.value)
            .reduce((previousV, currentV, index) => previousV + currentV, 0)}
          prods={this.state.products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <DisplayProducts 
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} 
        />
      </div>
    );
  }
}

export default App;
