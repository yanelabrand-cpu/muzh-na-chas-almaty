import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <WhyUs />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
