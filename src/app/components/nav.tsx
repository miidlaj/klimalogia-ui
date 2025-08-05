"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import clsx from "clsx";

import Logo from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Nav() {
  const pathname = usePathname();
  const [isFrosted, setIsFrosted] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Solutions", href: "/services" },
    { name: "Partner with us", href: "/partner-with-us" },
    { name: "Media", href: "/media" },

    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFrosted(entry.boundingClientRect.y < 0);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  const textColor = isFrosted ? "text-brand-navy" : "text-white";
  const underlineColor = isFrosted ? "bg-brand-gradient" : "bg-white";

  return (
    <nav
      className={clsx("fixed top-0 z-50 w-full transition-all duration-300", {
        "backdrop-blur-sm bg-primary/30 border-primary/50": isFrosted,
        "bg-transparent": !isFrosted,
      })}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo
            height={35}
            width={150}
            variant={isFrosted ? "gradient" : "white"}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 group ${textColor} hover:${textColor}/90`}
            >
              {item.name}
              <span
                className={clsx(
                  "absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                  underlineColor
                )}
              ></span>
              {pathname === item.href && (
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 w-full",
                    underlineColor
                  )}
                ></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden transition-colors duration-300 hover:bg-black/10 ${textColor}`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] border-l-0 bg-transparent p-6 isolate shadow-[-10px_0_24px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:inset-0 before:z-0 before:rounded-l-2xl before:bg-brand-gradient-mobile after:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-l-2xl after:backdrop-blur-lg"
          >
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-lg font-medium text-white transition-colors duration-300 group hover:text-white/90 ${
                    pathname === item.href ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white"></span>
                  )}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
