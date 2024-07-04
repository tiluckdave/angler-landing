import CTA from "@/components/CTA";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import For from "@/components/For";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CatalogExpert from "@/components/CatalogExperts";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <Head>
        <title>Angler</title>
      </Head>
      <div id="hero">
        <NavBar />
        <Hero />
        <CatalogExpert />
      </div>
      <HowItWorks />
      <For />
      <CTA />
      <Footer />
    </main>
  );
}
