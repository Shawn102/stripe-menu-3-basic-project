import React from "react";
import phoneImg from '../images/phone.svg';
import { useGlobalContext } from "./Context";
 
const Hero = () => {
    const { OutCloseSubMenu } = useGlobalContext();
    return (
        <section onMouseOver={OutCloseSubMenu} className="hero">
            <div className="hero-center">
                <article className="text-area">
                    <h1 className="h1-hero">Payments infrastructure for the internet</h1>
                    <p className="p1-hero">Millons of companies of all sizes-from startups to Fotune 500s-use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className="start-now-btn">Start now</button>
                </article>
                <article className="img-area">
                    <img src={phoneImg} alt="" className="hero-image" />
                </article>
            </div>
        </section>         
    )
};
export default Hero;