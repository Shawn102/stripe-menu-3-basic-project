import React from "react";
import phone from "../images/phone.svg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyGlobalContext } from "../Context";

const Home = () => {
  return (
    <div className="relative-div">
      <div className="absolute-div">
        <div className="section-1">
          <h1 className="h1-2">Payments infrastructure for the internet</h1>
          <p className="p-hero-text">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="start-now-btn">
            <Link to="/payment" className="strt">
              Start now
            </Link>
          </button>
        </div>
        <div className="section-1">
          <img src={phone} alt="phone" className="phone-photo" />
        </div>
      </div>
    </div>
  );
};
export default Home;
