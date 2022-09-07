import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          qt: 0
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          qt: 0
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          qt: 0
        },
        {
          id: 3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          qt: 0
        }
      ],
      value: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index) {
    this.state.value.push(e.target.value);
  }

  renderProducts(products) {
    return(
      <div>
        {products.map(product => 
          <ListGroup className="products">
            <ListGroupItem key={product.id} className="product px-5">
              <div className="productInfo py-3">
                <p className="productDesc">{product.desc}</p>
                <img className="productImg" src={product.image} alt={product.desc} width="150px"></img>
              </div>
              <input type="number" name="number" className="mx-3" onChange={this.handleChange} placeholder="0"></input>
              <span className="bg-white border-0">Quantity</span>
            </ListGroupItem>
          </ListGroup>
          ) 
        }
      </div>
    );
  }

  renderCart() {
    let totalQuantity = 0;
    this.state.value.forEach(item => {
      totalQuantity += item;
    });
    return(
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} size="sm" />
        <span>{totalQuantity} items</span>
      </div>
    );

  }

  render() {
    return(
      <div className="App">
        <div className="title bg-info px-5 py-3">
          <h1>Shop to React</h1>
          {this.renderCart()}
        </div>
        {this.renderProducts(this.state.products)}
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
