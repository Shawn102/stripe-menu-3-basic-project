import React from "react";
import phone from '../images/phone.svg';
import { useGlobalContext } from "../context";

const Hero = () => {
    const { OnClickSubmenuClose } = useGlobalContext();
    return (
        <div onMouseOver={ OnClickSubmenuClose} className="hero">
            <article className="hero-grid-area">
            <section className="hero-section-1">
                <h1 className="h1-text">Payments infrastructure for the internet</h1>
                <p className="p-hero-text">
                  Millions of companies of all sizes—from     startups to Fortune 500s—use
                  Stripe's software and APIs to accept       payments, send payouts, and
                  manage their businesses online.
                </p>
                <button className="start-now-btn">
                    Start now
                </button>
            </section>
            <section className="hero-section-2">
                <img src={phone} alt="" className="hero-image"/>
            </section>
            </article>
        </div>
    )
};
export default Hero;