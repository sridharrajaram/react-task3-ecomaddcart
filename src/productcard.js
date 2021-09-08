import React from "react";
import {useState} from "react";
import './App.css';

export default function Products(props) {

    const [qty, setQty] =useState(1);


let increaseQty = () => {
    let incQty = qty+1;
    setQty(incQty);
    
}

let decreaseQty = () => {
    if(qty>1){
        let decQty = qty-1;
        setQty(decQty);
    }
}

    return (
        <div className="col-lg-4 mt-2">
            <div className="card" >
                <img src={props.items.vegImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="">{props.items.vegName}</h6>
                    <h6>{props.items.vegCurrency}{props.items.vegPrice}{props.items.vegPriceUnits}</h6>
                    <div className="cartsection">
                        <div>
                            <form id="myform" className="cart-items-number d-flex ml-auto" method="POST" action="#">
                                <input disabled={props.items.added} onClick={()=>{decreaseQty()}} type="button" value="-" className="btn btn-success btn-sm" field="quantity"/>
                                <input type="text" name="quantity" value={qty} className="qty form-control"/>
                                <input disabled={props.items.added} onClick={()=>{increaseQty()}} type="button" value="+" className="btn btn-success btn-sm" field="quantity"/>
                            </form>
                        </div>
                        <button className="addcartbtn" disabled={props.items.added} onClick={()=>{props.purchaseItems(props.items.vegItem,qty)}}>Add to Cart</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}