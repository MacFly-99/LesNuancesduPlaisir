"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Calendar } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Accompagnements", href: "/accompagnements" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center cursor-pointer group shrink-0">
          <Image 
            src="/logo.png" 
            alt="Les Nuances du Plaisir" 
            width={350} 
            height={140} 
            className="w-auto h-28 md:h-32 object-contain transition-transform duration-300 group-hover:scale-105" 
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-12 text-base font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="transition-colors hover:text-sage-dark cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Bouton Desktop */}
          <Link href="/rendez-vous" className="hidden sm:block cursor-pointer">
            <Button 
              className="group rounded-full bg-primary text-primary-foreground transition-all duration-300 
                         hover:scale-[1.03] hover:bg-primary/95 hover:shadow-[0_8px_20px_-8px_rgba(201,123,99,0.7)] 
                         active:scale-95 cursor-pointer text-base px-6 py-6 h-auto"
            >
              Prendre RDV
              <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Menu Burger Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-sage-light hover:text-sage-dark h-12 w-12 text-secondary cursor-pointer">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-75 sm:w-100 bg-background">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="font-serif text-2xl text-secondary">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-lg font-medium text-foreground transition-colors hover:text-sage-dark cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <Link href="/rendez-vous" className="w-full cursor-pointer">
                      <Button className="w-full rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] cursor-pointer py-6 text-base">
                        Prendre RDV
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}