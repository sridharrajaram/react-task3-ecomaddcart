import React from "react";

export default function CartItem(props) {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        <h6>{props.addedItems.vegName}</h6>
        <h6>{props.addedItems.vegCurrency}{props.addedItems.vegPrice}{props.addedItems.vegPriceUnits}</h6> 
        <span className="badge badge-primary badge-pill">Qty({props.addedItems.qty})</span>
        <span style={{ cursor: 'pointer' }} className="badge badge-primary badge-pill"onClick={()=>{props.removeItems(props.addedItems.vegItem,props.addedItems.qty)}}>X</span>
    </li>
}