"use client";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "./page";

async function Push() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const Firebase = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "test"), (snapshot) => {
      const updatedDocuments = snapshot.docs.map((doc) => doc.data());
      setDocuments(updatedDocuments);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
    };
  }, []);

  return (
    <div className="p-10 flex justify-between ">
      <button className="w-1/4 " onClick={Push}>
        <span>Firestore Page</span>
      </button>
      {/* Render the 'arr' data */}
      <div className="flex flex-col justify-evenly">
        {documents.map((doc, index) => (
          <div key={index}>
            <p>First Name: {doc.first}</p>
            <p>Last Name: {doc.last}</p>
            <p>Born: {doc.born}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Firebase;
