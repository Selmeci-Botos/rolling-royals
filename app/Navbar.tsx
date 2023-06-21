"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Navbar = () => {
  function onLinkClick(num: number) {
    const sections = document.getElementsByTagName("section");
    if (num >= 0 && num < sections.length) {
      const section = sections[num];
      const offset = 105; // Adjust this value to set the desired offset

      const sectionTop = section.offsetTop;
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const targetScrollTop = sectionTop - offset;

      // Calculate the scroll distance
      const scrollDistance = targetScrollTop - bodyScrollTop;

      // Smooth scroll to the target position
      scrollToSmoothly(scrollDistance);
    }
    setIsOpen(false);
  }

  function scrollToSmoothly(scrollDistance: number, duration = 300) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const animateScroll = function () {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;

      const ease = function (t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      window.scroll(0, ease(elapsed, start, scrollDistance, duration));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scroll(0, start + scrollDistance);
      }
    };

    animateScroll();
  }

  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-30 flex h-20 items-center justify-between bg-[#f5f5f5] bg-opacity-50 p-3 backdrop-blur-lg backdrop-filter md:h-24">
      <img
        src="https://static.wixstatic.com/media/c5e733_c538c9de96fd47bcbc1f8a1fac6e1d8f~mv2.png/v1/crop/x_0,y_0,w_2827,h_1142/fill/w_463,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%20(12).png"
        alt="logo"
        className=" h-16 opacity-100 md:h-20"
      />
      <button
        id="nav-toggle"
        aria-label="menu"
        className="menuu block h-12 w-auto items-center hover:text-black lg:hidden"
        onClick={togglePanel}
      >
        {isOpen ? (
          <GrClose className="h-full w-auto p-1 hover:text-black" />
        ) : (
          <AiOutlineMenu className="h-full w-auto hover:text-black" />
        )}
        {/*  */}
      </button>
      <div className=" hidden lg:block lg:items-center" id="nav-content">
        <div className="flex flex-row justify-evenly gap-2">
          <button
            aria-label="főoldal"
            onClick={() => {
              onLinkClick(0);
            }}
            className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent  p-3 text-center text-black hover:border-black hover:bg-black hover:text-white"
          >
            Főoldal
          </button>
          <button
            aria-label="Rólunk"
            onClick={() => {
              onLinkClick(1);
            }}
            className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent  p-3 text-center text-black hover:border-black hover:bg-black hover:text-white"
          >
            Webshop
          </button>
          <button
            aria-label="Vizsgálataink"
            onClick={() => {
              onLinkClick(4);
            }}
            className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent  p-3 text-center text-black hover:border-black hover:bg-black hover:text-white"
          >
            Kosár
          </button>

          {/* {openLang ? "open" : "closed"} */}
        </div>
      </div>
      {/* 
      =========================================================================================================================
      Mobile Navbar
      =========================================================================================================================
      */}
      <div
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col justify-between bg-[#1f1f1f] lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        id="nav-panel"
      >
        <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-3 py-5">
          <button
            aria-label="Főoldal"
            onClick={() => {
              onLinkClick(0);
            }}
            className="flex w-2/3 rounded-full bg-white text-center hover:bg-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">
              Főoldal
            </span>
          </button>
          <button
            aria-label="Rólunk"
            onClick={() => {
              onLinkClick(1);
            }}
            className="flex w-2/3 rounded-full bg-white text-center hover:bg-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">
              Webshop
            </span>
          </button>
          <button
            aria-label="Vizsgálataink"
            onClick={() => {
              onLinkClick(4);
            }}
            className="flex w-2/3 rounded-full bg-white text-center hover:bg-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">Kosár</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
