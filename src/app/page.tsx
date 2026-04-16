import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureDesserts from "@/components/SignatureDesserts";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureDesserts />
        <About />
        <MenuPreview />
        <Gallery />
        <Testimonials />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
