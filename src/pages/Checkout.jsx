import React from "react";
import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitleText, CartTotal } from "../component";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader =
  (store) =>
  ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("you must be logged in to checkout");
      return redirect("/login");
    }
    return null;
  };

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems === 0) {
    return <SectionTitleText text="your cart is emphty" />;
  }
  return (
    <>
      <SectionTitleText text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
};

export default Checkout;
