"use client";

import { useSearchParams } from "next/navigation";
import { db } from "../page";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [data, setData] = useState<DocumentData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "bicycles", "Sm3QLIMFJbIUdNKkC8oV ");
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setData(data);
        } else {
          // Handle case when the document doesn't exist
        }
      } catch (error) {
        // Handle any errors that occurred during the operation
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [name]); // Include 'name' in the dependency array to re-fetch data when it changes

  return (
    <div>
      Név: {name}
      {data && <div>img: {data.img}</div>}
    </div>
  );
}
