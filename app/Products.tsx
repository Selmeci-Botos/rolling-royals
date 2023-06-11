"use client";

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function showTestimonial(index: number) {
    setActiveIndex(index);
  }

  function nextTestimonial() {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
  }

  function previousTestimonial() {
    const previousIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(previousIndex);
  }

  const testimonials = [
    {
      name: "RockClimber 16”",
      price: "120.000Ft",
      content:
        "A RockClimber egy tökéletes választás hegyvidékre a széles kerekei miatt. Az elektromos rásegítéssel nagyobb távokat tehetsz meg mint valaha!",
      img: "https://media.wired.com/photos/63e569c9de59d567d5d7c66d/master/w_2240,c_limit/Ride1Up-Cafe-Cruiser-Featured-Gear.jpg",
    },
    {
      name: "Mike Johnson",
      content:
        "Your customer support team went above and beyond to assist me with my issue. They were patient and provided a quick solution. Thank you for the outstanding service!",
    },
  ];

  return (
    <div className=" flex w-full flex-col items-center justify-between text-center ">
      <p className="h-1/4 w-full text-3xl font-bold">A Kerékpárok</p>
      <div className="flex h-3/4 flex-col md:flex-row">
        <button
          className="bg-transparent text-4xl text-primary hover:text-white"
          onClick={previousTestimonial}
        >
          <AiOutlineArrowLeft />
        </button>
        <div className="card-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${
                index === activeIndex ? "active" : ""
              } card flex flex-col justify-evenly p-1 gap-4  md:p-5 `}
            >
              <p className="testimonial-name text-2xl"> {testimonial.name}</p>
              <p className="testimonial-name text-2xl"> {testimonial.price}</p>
              <p className="testimonial-content text-xl">
                {testimonial.content}
              </p>
              <img
                src={testimonial.img}
                alt="img"
                className="rounded-xl opacity-100"
              />
            </div>
          ))}
        </div>
        <button
          className="bg-transparent text-4xl text-primary hover:text-white"
          onClick={nextTestimonial}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};
