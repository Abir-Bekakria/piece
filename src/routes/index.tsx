import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { BestSellers } from "@/components/BestSellers";
import { WhyUs } from "@/components/WhyUs";
import { BrandsBar } from "@/components/BrandsBar";
import { PartsCatalog } from "@/components/PartsCatalog";
import { RarePartCTA } from "@/components/RarePartCTA";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <BestSellers />
        <WhyUs />
        <RarePartCTA />
        <PartsCatalog />
        <BrandsBar />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
