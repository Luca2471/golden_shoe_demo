import React from "react";
import "./ShippingAndReturns.scss";
import Footer from "../Footer/Footer";

const Returns = () => {
  return (
    <>
      <section className="sar-container">
        <div className="sar-title">
          <h1>Shipping & Returns</h1>
        </div>
        <div className="inner-container">
          <div className="shipping-container">
            <div className="shipping-title">
              <h2>Shipping</h2>
              <h3 className="sar-h3">Delivery options</h3>
              <p>At Golden Shoe, we offer multiple delivery services. </p>
              <p>
                <b>Standard delivery:</b> £4.00 (per order). <b>FREE</b> if
                £35.00 minimum order spend met.
              </p>
              <p>
                <b>Next Day Delivery</b> £5.95 (per order). Place an order
                before 22:00, receive the following day.
              </p>
              <h3 className="sar-h3">Shipping information</h3>
              <p>
                Deliveries to all UK addresses are fully tracked. We'll email
                you a link to your tracking information once your parcel has
                been shipped from our warehouse.
              </p>
              <p>
                If multiple orders have been plaaced within a few days of each
                other that qualify for free delivery and are being shipped to
                the same delivery address, we may send your orders in one
                parcel. This can be confirmed via checking your order tracking
                details. If your tracking numbers are the same, these will have
                been shipped together.
              </p>
              <p>
                If you wish to receive SMS delivery updates from our delivery
                partners regarding your order, please provide a valid mobile
                number on your Golden Shoe account.
              </p>
            </div>
          </div>
          <div className="returns-container">
            <div className="returns-title">
              <h2>Returns</h2>
              <h3 className="sar-h3">Our returns policy</h3>
              <p>
                As long as an item is still in its original condition, we accept
                returns for free.
              </p>
              <p>
                If you return an item requesting a refund within <b>28 days</b>{" "}
                of the item being delivered to you, we'll give you a full refund
                by way of the original payment method.
              </p>
              <p>
                We aim to refund you within <b>14 days</b> of receiving the
                returned item.
              </p>
              <h3 className="sar-h3">How to return an item</h3>
              <p>
                Returning an item has never been easier. Please visit{" "}
                <b>Your Orders</b>, click the "Return" button to initiate the
                return process and follow the instructions provided.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Returns;
