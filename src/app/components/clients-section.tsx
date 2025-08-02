import Link from "next/link";
import { ShinyButton } from "./shiny-button";
import { Marquee } from "./marquee"; // Make sure path is correct

// 1. Data for the client logos
const clientLogos = [
  {
    name: "IKEA",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/IKEA.svg",
  },
  {
    name: "DMCC",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/DMCC.svg",
  },
  {
    name: "Landmark Group",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Landmark-group.svg",
  },
  {
    name: "Etihad",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Etihad.svg",
  },
  {
    name: "Sharjah",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Sharjah.svg",
  },
  {
    name: "IKEA-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/IKEA.svg",
  },
  {
    name: "DMCC-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/DMCC.svg",
  },
  {
    name: "Landmark Group-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Landmark-group.svg",
  },
];

const LogoCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="relative flex h-20 w-40 items-center justify-center rounded-lg border bg-white p-4">
      <img src={src} alt={name} className="h-full w-full object-contain" />
    </div>
  );
};

export function ClientsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-light-teal">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by corporations, governments, and institutions worldwide to
            deliver impactful and credible ESG leadership.
          </p>
        </div>

        <Marquee pauseOnHover className="[--duration:30s]">
          {clientLogos.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </Marquee>
        <div className="text-center mt-16">
          <Link href={"/clients"}>
            <ShinyButton>View Our Client Stories</ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
