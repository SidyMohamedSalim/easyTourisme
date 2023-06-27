import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Services />
      <Features />
    </main>
  );
}
