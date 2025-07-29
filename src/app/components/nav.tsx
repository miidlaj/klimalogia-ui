"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Info, Target, Briefcase, FolderOpen, Users, Handshake, UserPlus, Phone, Menu } from "lucide-react"
import { Dock, DockIcon } from "./dock"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about-us", icon: Info },
  { name: "Mission", href: "/mission-vision", icon: Target },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Partner", href: "/partner-with-us", icon: Handshake },
  { name: "Careers", href: "/careers", icon: UserPlus },
  { name: "Contact", href: "/contact-us", icon: Phone },
]

export function Nav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Desktop Navigation with Dock */}
      <div className="hidden lg:block">
        <Dock
          className={`transition-all duration-300 ${isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg border-gray-200"
              : "bg-white/10 backdrop-blur-sm border-white/20"
            }`}
        >
          {/* Logo */}
          <Link href="/">
            <DockIcon
              className={`mr-2 ${isScrolled ? "bg-blue-600 text-white" : "bg-white/20 text-white"} hover:bg-blue-700`}
            >
              <div className="text-lg font-bold">K</div>
            </DockIcon>
          </Link>

          {/* Navigation Items */}
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link href={item.href} key={item.name}>
                <DockIcon
                  key={item.name}
                  className={`transition-all ${isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : isScrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                </DockIcon>
              </Link>
            )
          })}
        </Dock>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-sm"
            }`}
        >
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-blue-600">
              Klimalogia
            </motion.div>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`${isScrolled ? "text-gray-700" : "text-white"}`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 text-lg font-semibold transition-colors hover:text-primary ${pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : ""
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
