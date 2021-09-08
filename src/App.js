import { useState } from 'react';
import './App.css';
import Header from "./header";
import Products from './productcard';
import CartItem from './cart';


function App() {

  const [veggies,setVeggies] = useState([
    {
      vegItem: 1,
      vegName: "Red Chilli",
      vegCurrency: "Rs.",
      vegPrice: 30,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v1.jpg"
    },
    {
      vegItem: 2,
      vegName: "Big Onion",
      vegCurrency: "Rs.",
      vegPrice: 50,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v2.jpg"
    },
    {
      vegItem: 3,
      vegName: "Tomato",
      vegCurrency: "Rs.",
      vegPrice: 20,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v3.jpg"
    },
    {
      vegItem: 4,
      vegName: "Cabbage",
      vegCurrency: "Rs.",
      vegPrice: 35,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v4.jpg"
    },
    {
      vegItem: 5,
      vegName: "Cauliflower",
      vegCurrency: "Rs.",
      vegPrice: 40,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v5.jpg"
    },
    {
      vegItem: 6,
      vegName: "Carrot",
      vegCurrency: "Rs.",
      vegPrice: 60,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v6.jpg"
    },
    {
      vegItem: 7,
      vegName: "Star Anise",
      vegCurrency: "Rs.",
      vegPrice: 150,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v7.jpg"
    },
    {
      vegItem: 8,
      vegName: "Brinjal",
      vegCurrency: "Rs.",
      vegPrice: 20,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v8.jpg"
    },
    {
      vegItem: 9,
      vegName: "Capsicum",
      vegCurrency: "Rs.",
      vegPrice: 20,
      vegPriceUnits: "/kg",
      vegImage: "https://askbootstrap.com/preview/vegishop/img/listing/v9.jpg"
    },
  ])

const [cart,setCart] = useState([]); 
const [total,setTotal] = useState(0);


//function to add item to cart
let addtocart = (id,qty) => {

  let vegProduct = veggies.find((obj) => obj.vegItem == id);
  vegProduct.qty = qty;
  vegProduct.added = true;
  setCart([...cart,vegProduct]);
  setTotal(total+(parseInt(qty)*vegProduct.vegPrice));
}

//function to remove item from cart
let remfromcart = (id,qty) => {
  let result = window.confirm("Are you sure to remove this product from cart");
  if(result){
    let cartIndex = cart.findIndex((obj) => obj.vegItem == id);
    let vegProduct = cart[cartIndex];
    vegProduct.added = false;
    setTotal(total-(qty*cart[cartIndex].vegPrice));
    cart.splice(cartIndex,1);
    setCart([...cart]);
    
  }
  
}

  return (
    <>
      <Header></Header>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {/* Product data pull using map method */}
              {
                veggies.map((obj) => {
                  return <Products items={obj} purchaseItems={addtocart}></Products>
                })
              }
            </div>
          </div>
          <div className="col-lg-3 mt-2">
            <h4>Cart Items</h4>
            <ul class="list-group">
              {
                cart.length === 0 ? <h4>No items in cart</h4> : null
              }
              {/* cart data pull using map method */}
              {
                cart.map((addedItem) => {
                  return <CartItem addedItems={addedItem} removeItems={remfromcart}></CartItem>
                })
              }
            </ul>
            <h2>
              Total - Rs.{total}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
