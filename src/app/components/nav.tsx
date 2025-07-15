"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Mission & Vision", href: "/mission-vision" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/clients" },
  { name: "Partner with us", href: "/partner-with-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo height={150} width={150} />
        </Link>

        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-light text-white hover:text-white/80 transition-colors ${
                pathname === item.href ? "border-b-2 border-white" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-semibold transition-colors hover:text-primary ${
                    pathname === item.href ? "border-b-2 border-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}