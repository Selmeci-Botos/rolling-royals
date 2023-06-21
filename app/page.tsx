import { About } from "./About";
import { Featured } from "./Featured";
import { Navbar } from "./Navbar";
import { ProductsMainpage } from "./ProductsMainpage";
import { S1 } from "./S1";

export default function Home() {
  return (
    <main className="text-center">
      {/* <Navbar /> */}
      <S1 />
      {/* <Featured /> */}
      <ProductsMainpage />
      <About />
    </main>
  );
}
