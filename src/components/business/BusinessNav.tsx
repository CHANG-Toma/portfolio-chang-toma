"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Offres", href: "#offres" },
  { name: "Méthode", href: "#processus" },
  { name: "Approche", href: "#approche" },
  { name: "Contact", href: "#contact" },
];

const BusinessNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const ids = navItems.map((n) => n.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const MobileMenu = () => {
    if (!mounted) return null;
    return createPortal(
      <div
        className={cn(
          "fixed inset-0 z-[9999] flex items-center justify-center bg-ink md:hidden",
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        )}
        style={{ transition: "opacity 0.25s ease" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-5 text-snow"
          aria-label="Fermer le menu"
        >
          <X className="h-5 w-5" />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-snow"
            >
              {item.name}
            </a>
          ))}
          <div className="mt-2">
            <ThemeToggle />
          </div>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-sm text-mist">
            Portfolio
          </Link>
        </nav>
      </div>,
      document.body
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full px-6 py-4 transition-colors duration-300 md:px-10",
        scrolled ? "border-b border-cbtBorder bg-ink/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#accueil" className="text-sm font-semibold tracking-[0.02em] text-snow">
          CodeByToma
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[13px] transition-colors",
                  isActive ? "bg-cbtFill text-snow" : "text-mist hover:text-snow"
                )}
              >
                {item.name}
              </a>
            );
          })}
          <Link
            href="/portfolio"
            className="ml-2 px-3 py-1.5 text-[13px] text-mist/50 hover:text-mist"
          >
            Portfolio
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="ml-2 rounded-md bg-snow px-3.5 py-1.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(true)} className="text-snow" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default BusinessNav;
