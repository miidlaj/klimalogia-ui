"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { CiSearch } from "react-icons/ci";

import Logo from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Solutions", href: "/services" },
  { name: "Partner with us", href: "/partner-with-us" },
  { name: "Media", href: "/media" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [isFrosted, setIsFrosted] = useState(false);

  const navStyles = useMemo(
    () => ({
      frosted: {
        backdropFilter: "blur(24px) saturate(180%) contrast(110%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%) contrast(110%)",
      },
      normal: {
        backdropFilter: "blur(16px) saturate(150%)",
        WebkitBackdropFilter: "blur(16px) saturate(150%)",
      },
    }),
    []
  );

  const navClasses = useMemo(
    () =>
      clsx(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out isolate",
        isFrosted
          ? "backdrop-blur-xl bg-white/[0.15] shadow-xl shadow-black/[0.08] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-brand-navy/60 after:via-brand-blue/80 after:to-brand-teal/60"
          : "backdrop-blur-lg bg-white/[0.08] border-b border-white/20"
      ),
    [isFrosted]
  );

  const textColor = isFrosted ? "text-brand-navy" : "text-white";
  const underlineColor = isFrosted ? "bg-brand-gradient" : "bg-white";

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldFrost = entry.boundingClientRect.y < 0;
        if (shouldFrost !== isFrosted) {
          setIsFrosted(shouldFrost);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -1px 0px",
      }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [isFrosted]);

  const NavigationItems = useMemo(
    () =>
      navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            "relative text-sm font-medium transition-all duration-300 group",
            textColor,
            "hover:scale-105 hover:text-opacity-90"
          )}
        >
          {item.name}
          <span
            className={clsx(
              "absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
              underlineColor
            )}
          />
          {pathname === item.href && (
            <span
              className={clsx(
                "absolute -bottom-1 left-0 h-0.5 w-full",
                underlineColor
              )}
            />
          )}
        </Link>
      )),
    [textColor, underlineColor, pathname]
  );

  const MobileNavigationItems = useMemo(
    () =>
      navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            "relative text-lg font-medium transition-all duration-300 group",
            "text-white hover:text-white/90 hover:translate-x-2",
            pathname === item.href && "text-white font-semibold"
          )}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          {pathname === item.href && (
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white" />
          )}
        </Link>
      )),
    [pathname]
  );

  return (
    <nav
      className={navClasses}
      style={isFrosted ? navStyles.frosted : navStyles.normal}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          aria-label="Go to homepage"
        >
          <Logo
            height={35}
            width={150}
            variant={!isFrosted ? "white" : "gradient"}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex lg:gap-x-8">
          {NavigationItems}

          <button
            aria-label="Search"
            className={clsx(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-black/10 hover:scale-110 active:scale-95",
              textColor
            )}
          >
            <CiSearch className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={clsx(
                "lg:hidden transition-all duration-300",
                "hover:bg-black/10 hover:scale-110 active:scale-95",
                textColor
              )}
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={clsx(
              "w-80 sm:w-96 border-0 p-0 overflow-hidden",
              "bg-gradient-to-br from-brand-navy/95 via-brand-blue/95 to-brand-teal/95",
              "backdrop-blur-xl shadow-2xl"
            )}
          >
            <div className="relative h-full p-6">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-l-2xl" />

              <div className="relative z-10">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-white text-xl font-semibold">
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-6">
                  {MobileNavigationItems}
                </nav>

                {/* Mobile Search */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <button
                    aria-label="Search"
                    className="flex items-center gap-3 w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
                  >
                    <CiSearch className="h-5 w-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
