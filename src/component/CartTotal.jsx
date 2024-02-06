import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotal = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* subtotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>subtotals</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* shipping  */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* orderTotal */}
        <p className="flex justify-between text-sm mt-4 border-base-300 pb-2">
          <span>orderTotal</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
