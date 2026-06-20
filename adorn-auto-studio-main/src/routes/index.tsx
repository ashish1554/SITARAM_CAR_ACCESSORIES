import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Videos } from "@/components/site/Videos";
import { Gallery } from "@/components/site/Gallery";
import { Feedback } from "@/components/site/Feedback";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sitaram Car Accessories — Premium Car Accessories Shop in Ahmedabad" },
      {
        name: "description",
        content:
          "Sitaram Car Accessories in Naroda, Ahmedabad — premium seat covers, music systems, LED lights, security and luxury car styling. Visit our showroom.",
      },
      { property: "og:title", content: "Sitaram Car Accessories — Premium Showroom Ahmedabad" },
      {
        property: "og:description",
        content:
          "Luxury car accessories, audio, lighting & security in Ahmedabad. Expert installation. Visit us at GIDC Naroda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          name: "Sitaram Car Accessories",
          image: "/og.jpg",
          telephone: "+91 97233 31554",
          email: "info@sitaramcaraccessories.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop no.8, Shreemad Exotica, Ring Road, Near Zudio, Hanspura",
            addressLocality: "GIDC Naroda, Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "382350",
            addressCountry: "IN",
          },
          areaServed: "Ahmedabad",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-[#050505] text-white overflow-x-hidden grain">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Videos />
      <Gallery />
      <Feedback />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
