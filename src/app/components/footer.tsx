import Logo from "@/components/logo";
import Link from "next/link";

const footerLinks = [
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/clients",
    label: "Clients",
  },
  {
    href: "/partners",
    label: "Partners",
  },
  {
    href: "/contact",
    label: "Contact Us",
    isExternal: false,
  },
];

export function Footer() {
  return (
    <footer className="footer-bg py-6">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <Link href="/" className="mb-4 text-2xl font-bold sm:mb-0">
          <Logo height={200} width={200} />
        </Link>
        <div className="flex space-x-6 text-white">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm"
              {...(link.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
