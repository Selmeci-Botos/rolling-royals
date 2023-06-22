import { About } from "./About";
import { Featured } from "./Featured";
import Firebase from "./Firebase";
import { ProductsMainpage } from "./ProductsMainpage";
import { S1 } from "./S1";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPjaoYytKnaHfWQ8L7oQodqezY76WtL8Y",
  authDomain: "rolling-royals.firebaseapp.com",
  projectId: "rolling-royals",
  storageBucket: "rolling-royals.appspot.com",
  messagingSenderId: "30926185240",
  appId: "1:30926185240:web:3d4bb173880242f073b46d",
  measurementId: "G-3KNE0WZ0W7",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default function Home() {
  return (
    <main className="text-center">
      <S1 />
      <Firebase />
      {/* <Featured /> */}
      <ProductsMainpage />
      <About />
    </main>
  );
}
