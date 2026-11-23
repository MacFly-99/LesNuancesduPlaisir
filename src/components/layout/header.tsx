"use client";

import Link from "next/link";
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
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-secondary">
            Les Nuances <span className="text-primary">du Plaisir</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
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
          {/* Bouton Desktop avec le nouveau Hover + Curseur */}
          <Link href="/rendez-vous" className="hidden sm:block cursor-pointer">
            <Button 
              className="group rounded-full bg-primary text-primary-foreground transition-all duration-300 
                         hover:scale-[1.03] hover:bg-primary/95 hover:shadow-[0_8px_20px_-8px_rgba(201,123,99,0.7)] 
                         active:scale-95 cursor-pointer"
            >
              Prendre RDV
              <Calendar className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Menu Burger Mobile */}
          <div className="md:hidden">
            <Sheet>
              {/* On applique directement les styles au Trigger, plus d'erreur TS ! */}
              <SheetTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-sage-light hover:text-sage-dark h-10 w-10 text-secondary cursor-pointer">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-75 sm:w-100 bg-background">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="font-serif text-2xl text-secondary">
                    Les Nuances <span className="text-primary">du Plaisir</span>
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
                      <Button className="w-full rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98] cursor-pointer">
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