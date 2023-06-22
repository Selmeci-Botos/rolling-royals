"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("1");

  return <div>Slug: {search}</div>;
}
