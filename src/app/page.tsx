import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Insurance from "@/components/Insurance";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Insurance />
        <Benefits />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
