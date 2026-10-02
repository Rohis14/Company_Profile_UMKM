import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Reviews from "@/components/reviews";
import Services from "@/components/services";

export default function Home() {
  return (
    <div
      id="top"
      className="relative flex-1 overflow-hidden bg-zinc-950 font-sans text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(245,158,11,0.16),transparent_70%)]"
      />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Products />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
