"use client";
import Image from "next/image";

export const S1 = () => {
  function onLinkClick(num: number) {
    const sections = document.getElementsByTagName("form");
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

  return (
    <section
      id="hero"
      className="s1 flex h-96 flex-col  items-center justify-evenly bg-black text-center "
    >
      <div
        className=" -z-2 opacity-45 absolute h-96 w-full object-contain
      "
      >
        {/* <Image fill src="/images/green.webp" objectFit="cover" alt="bg" /> */}
        <img
          src="https://media.wired.com/photos/63e569c9de59d567d5d7c66d/master/w_2240,c_limit/Ride1Up-Cafe-Cruiser-Featured-Gear.jpg"
          alt="bg"
          className=" h-full w-full object-cover"
        />
      </div>

      <p className="z-10 text-6xl font-semibold text-white">Athena</p>
      <div className=" z-10 text-xl text-white">
        Magyarország legnagyobb használt kerékpár kereskedése.
      </div>
    </section>
  );
};
