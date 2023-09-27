import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Link href={`/donationRequestcard/123`}>click here</Link>
    </div>
  );
}
