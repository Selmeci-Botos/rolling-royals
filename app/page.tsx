import { About } from "./About";
import { Products } from "./Products";
import { Qualities } from "./Qualities";
import { S1 } from "./S1";
import { Location } from "./Location";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="">
      <S1 />
      <Qualities />
      <Products />
      <Testimonials />
      <About />
      <Location />
    </main>
  );
}
