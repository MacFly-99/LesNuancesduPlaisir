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
import { Menu } from "lucide-react";

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
        
        <Link href="/" className="flex items-center space-x-2">
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
              className="transition-colors hover:text-sage-dark"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/rendez-vous" className="hidden sm:block">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Prendre RDV
            </Button>
          </Link>

          {/* Menu Burger Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-secondary" />}>
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
                      className="text-lg font-medium text-foreground transition-colors hover:text-sage-dark" // MODIFIÉ ICI
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <Link href="/rendez-vous" className="w-full">
                      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
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