import Features from "@/components/home/Features";
import News from "@/components/home/News";
import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import WhyMe from "../components/home/WhyMe";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Services />
      <Features />
      <WhyMe />
      <News />
    </main>
  );
}
