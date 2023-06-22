"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  return <div>Név: {name}</div>;
}
