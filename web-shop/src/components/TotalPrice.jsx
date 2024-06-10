import React from "react";

export default function TotalPrice({ totalPrice }) {
  // Conditional render logic if totalPrice is greater than 0
  if (totalPrice > 0) {
    return <h2 id="totalPriceDisplay">Total price: £{totalPrice}</h2>;
  }
}
