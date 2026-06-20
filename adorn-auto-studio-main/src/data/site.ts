import seat from "@/assets/p-seatcovers.jpg";
import music from "@/assets/p-music.jpg";
import lights from "@/assets/p-lights.jpg";
import mats from "@/assets/p-mats.jpg";
import perfume from "@/assets/p-perfume.jpg";
import steering from "@/assets/p-steering.jpg";
import security from "@/assets/p-security.jpg";
import exterior from "@/assets/p-exterior.jpg";

import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const SITE = {
  name: "Sitaram Car Accessories",
  tagline: "Your one-stop destination for premium car accessories in Ahmedabad.",
  phone: "+91 97233 31554",
  phoneRaw: "+919723331554",
  email: "info@sitaramcaraccessories.com",
  address: "Shop no.8, Shreemad Exotica, Ring Road, Near Zudio, Hanspura, GIDC Naroda, Ahmedabad, Gujarat 382350",
  whatsapp: "https://wa.me/919723331554?text=Hello%20I%20want%20to%20inquire%20about%20car%20accessories",
  instagram: "https://www.instagram.com/sitaram_car_accessories_?igsh=MnpkZ3BoODcwNnVw",
  mapEmbed:
    "https://www.google.com/maps?q=Shreemad+Exotica+Ring+Road+Hanspura+GIDC+Naroda+Ahmedabad&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Sitaram+Car+Accessories+Shreemad+Exotica+Hanspura+Naroda+Ahmedabad",
};

export const PRODUCTS = [
  { title: "Car Seat Covers", desc: "Premium leather & fabric seat covers for all car models.", icon: "Armchair", img: seat },
  { title: "Music Systems & Speakers", desc: "High-quality audio systems and bass speakers.", icon: "Music2", img: music },
  { title: "Car LED Lights", desc: "Bright and stylish LED headlights, DRLs & ambient lights.", icon: "Lightbulb", img: lights },
  { title: "Floor Mats", desc: "Custom-fit 3D and 5D floor mats for every vehicle.", icon: "LayoutGrid", img: mats },
  { title: "Car Perfumes", desc: "Long-lasting premium car fragrances and air fresheners.", icon: "SprayCan", img: perfume },
  { title: "Steering Covers", desc: "Comfortable grip steering wheel covers in all sizes.", icon: "CircleDot", img: steering },
  { title: "Car Security Systems", desc: "Advanced alarms, central locking & GPS trackers.", icon: "ShieldCheck", img: security },
  { title: "Interior & Exterior", desc: "Chrome garnishes, spoilers, body kits & more.", icon: "Sparkles", img: exterior },
] as const;

export const GALLERY = [
  "/images/gallery/image1.jpeg",
  "/images/gallery/image2.jpeg",
  "/images/gallery/image3.jpeg",
  "/images/gallery/iamge4.jpeg",
  "/images/gallery/image5.jpeg",
  "/images/gallery/image6.jpeg"
];

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Videos", href: "#videos" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

// Placeholder video reels - replace with real mp4s in src/assets/videos/
export const VIDEOS = [
  { video: "/videos/video1.mp4", title: "Ambient LED Setup" },
  { video: "/videos/video2.mp4", title: "Leather Interior Upgrade" },
  { video: "/videos/video3.mp4", title: "SUV Light Transformation" },
  { video: "/videos/video4.mp4", title: "Audio Console Install" },
];
