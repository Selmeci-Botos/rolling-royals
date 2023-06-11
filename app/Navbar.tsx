"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
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
    <nav className="fixed left-0 right-0 top-0 z-10 flex h-20 items-center justify-between bg-[#f5f5f5] bg-opacity-50 p-3 backdrop-blur-lg backdrop-filter md:h-24">
      {/* <Image
        height={15}
        width={150}
        alt="logo"
        src="/images/logo.webp"
        className=" self-center p-3 opacity-100 "
      /> */}
      <img src="/images/logo.webp" alt="logo" className=" h-16 md:h-20" />
      <button
        id="nav-toggle"
        className="menuu block h-12 w-auto items-center lg:hidden"
        onClick={togglePanel}
      >
        <GiHamburgerMenu className="h-full w-auto" />
      </button>
      <div className=" hidden lg:block lg:items-center" id="nav-content">
        <div className="flex flex-row justify-evenly gap-2">
          <button
            onClick={() => {
              onLinkClick(0);
            }}
            className="flex min-w-min flex-row  items-center rounded-full text-center transition  hover:text-white"
          >
            <span className=" rounded-full transition hover:bg-transparent">
              Kontakt
            </span>
          </button>
          <button
            onClick={() => {
              onLinkClick(0);
            }}
            className="flex min-w-min flex-row  items-center rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className=" rounded-full hover:bg-white">Főlap</span>
          </button>
          <button
            onClick={() => {
              onLinkClick(1);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full hover:bg-white">Ajánlataink</span>
          </button>
          {/* <button
            onClick={() => {
              onLinkClick(2);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full hover:bg-white">Vezetőink</span>
          </button> */}
          <button
            onClick={() => {
              onLinkClick(3);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full hover:bg-white">Rólunk</span>
          </button>
          {/* <button
            onClick={() => {
              onLinkClick(4);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full hover:bg-white">Telephelyek</span>
          </button> */}
        </div>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col justify-between bg-[#1f1f1f] lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        id="nav-panel"
      >
        <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-3 py-5">
          <button
            onClick={() => {
              onLinkClick(0);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">Főlap</span>
          </button>
          <button
            onClick={() => {
              onLinkClick(1);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">
              Ajánlataink
            </span>
          </button>
          <button
            onClick={() => {
              onLinkClick(2);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">
              Vezetőink
            </span>
          </button>
          <button
            onClick={() => {
              onLinkClick(3);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">Rólunk</span>
          </button>

          <button
            onClick={() => {
              onLinkClick(4);
            }}
            className="flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline"
          >
            <span className="rounded-full bg-[#1f1f1f] text-white">
              Telephelyek
            </span>
          </button>
        </div>
        {/* <div className="flex flex-col p-5 text-center text-white">
          <p>Kövess minket!</p>
          <div className="flex justify-center text-5xl">
            <a
              target="_blank"
              className="whitee"
              href="https://www.facebook.com"
            >
              <AiFillFacebook />
            </a>
            <Link
              target="_blank"
              className="whitee"
              href="https://www.linkedin.com/company/volvid-zrt./about/"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
