import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Link href="/about">Go to the about page</Link>
      <button type="button" onClick={() => router.push("/useRouter")}>
        go to page by router push
      </button>
    </div>
  );
}
