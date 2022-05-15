import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { people } from "../Data";

const Payment = () => {
  const [myPeople, setMyPeople] = useState(people);
  const [index, setIndex] = useState(0);
  //   This useEffect will handle the index range of the slider
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, myPeople]);
  // This useEffect for auto slide
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearTimeout(autoSlide);
    };
  }, [index]);
  return (
    <div className="padding-payment">
      <h1 className="h1">Payment</h1>
      <section className="section-center">
        {myPeople.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let classInAction = "next-slide";
          if (personIndex === index) {
            classInAction = "active-slide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            classInAction = "previous-slide";
          }
          return (
            <article key={id} className={`article ${classInAction}`}>
              <img src={image} alt="" className="slider-image" />
              <div className="border-bottom"></div>
              <h3 className="name-h3">{name}</h3>
              <h4 className="title-h4">{title}</h4>
              <p className="quote-p">{quote}</p>
            </article>
          );
        })}
        <button
          onClick={() => setIndex(index - 1)}
          className="btn-left btnLeftRight"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          className="btn-right btnLeftRight"
        >
          <FaAngleRight />
        </button>
      </section>
      <div className="pay">
        <button className="start-now-btn">
          <Link to="/" className="strt">
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Payment;
