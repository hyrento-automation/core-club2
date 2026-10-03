"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/data/siteData";

interface HeaderProps {
  onOpenInfo?: () => void;
}

export default function Header({ onOpenInfo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileAccordion = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 pointer-events-none select-none">
      <div className="w-full flex justify-between items-start">
        {/* Top-Left Logo: Outlined square monogram with official ONYX logo, 1px white border, ~46px */}
        <div className="p-5 md:p-7 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-3.5 group cursor-pointer"
            aria-label="ONYX Club Home"
          >
            <div className="relative w-[48px] h-[48px] border border-white flex items-center justify-center bg-black overflow-hidden group-hover:border-accent transition-colors duration-300 shadow-xl">
              <Image
                src={siteConfig.logo}
                alt="ONYX Club Logo"
                fill
                sizes="50px"
                className="object-cover scale-110 filter brightness-110 contrast-125"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-extrabold text-white text-base tracking-[0.25em] leading-none">
                {siteConfig.fullName}
              </span>
              <span className="font-heading text-[9px] text-grey-body tracking-[0.3em] uppercase mt-1">
                COLOGNY &middot; LAKE GENEVA
              </span>
            </div>
          </Link>
        </div>

        {/* Top-Right: SOLID BLACK bar flush to top and right edge (~58% width, ~52px tall) */}
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto hidden xl:flex items-center justify-between h-[52px] bg-black text-white px-8 transition-all duration-300 border-b border-l border-white/10 ${
            scrolled ? "shadow-2xl shadow-black/80" : ""
          } w-[62vw] max-w-[940px]`}
        >
          <ul className="flex items-center justify-between w-full pr-6 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasDropdown = item.dropdown && item.dropdown.length > 0;

              return (
                <li key={item.label} className="relative group/nav py-3.5">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 text-[10.5px] font-heading font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:text-white ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-2.5 h-2.5 opacity-60 group-hover/nav:rotate-180 transition-transform duration-200" />
                    )}

                    {/* Active 1px underline */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white pointer-events-none" />
                    )}

                    {/* Hover: underline grows from the left (0.3s) */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover/nav:scale-x-100 pointer-events-none" />
                    )}
                  </Link>

                  {/* Dropdowns: Black panel, 1px top accent line, items fade + slide down 10px (0.25s) */}
                  {hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-250 ease-editorial z-50">
                      <div className="w-56 bg-black border-t border-accent border-b border-l border-r border-white/10 shadow-2xl py-3">
                        {item.dropdown!.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="group/item flex items-center px-5 py-2.5 text-[10px] font-heading font-medium tracking-wider text-white/70 hover:text-accent transition-all duration-200"
                          >
                            <span className="inline-block transition-transform duration-200 ease-editorial group-hover/item:translate-x-1.5">
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Two-line Hamburger Icon (two horizontal lines of unequal length) */}
          <button
            onClick={onOpenInfo}
            className="flex flex-col items-end justify-center gap-1.5 w-8 h-8 group focus:outline-none"
            aria-label="Open Gym Information Menu"
          >
            <span className="w-6 h-[2px] bg-white group-hover:bg-accent transition-all duration-300" />
            <span className="w-4 h-[2px] bg-white group-hover:w-6 group-hover:bg-accent transition-all duration-300" />
          </button>
        </nav>

        {/* Mobile / Tablet Header: Hamburger button on the top-right */}
        <div className="xl:hidden pointer-events-auto p-5">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 bg-black border border-white/20 flex flex-col items-end justify-center gap-1.5 px-3 focus:outline-none shadow-xl"
            aria-label="Toggle Mobile Navigation"
          >
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-5 rotate-45 translate-y-[4px]" : "w-5"
              }`}
            />
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[4px]" : "w-3"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Full-Screen Black Menu with Accordion Sub-Menus and Staggered Link Reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto fixed inset-0 bg-black text-white z-50 flex flex-col justify-between p-8 overflow-y-auto xl:hidden"
          >
            {/* Top row */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 border border-white flex items-center justify-center bg-black overflow-hidden">
                  <Image
                    src={siteConfig.logo}
                    alt="ONYX Club Logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-sm tracking-widest block">
                    {siteConfig.fullName}
                  </span>
                  <span className="text-[9px] font-heading text-grey-body tracking-wider">
                    {siteConfig.city}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white"
                aria-label="Close Mobile Menu"
              >
                ✕
              </button>
            </div>

            {/* Nav list with accordions */}
            <div className="py-6 space-y-3">
              {navItems.map((item, idx) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isAccordionOpen = openMobileDropdown === item.label;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.08, duration: 0.35 }}
                    className="border-b border-white/5 pb-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!hasDropdown) {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className="font-heading font-bold text-base uppercase tracking-wider hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>

                      {hasDropdown && (
                        <button
                          onClick={() => toggleMobileAccordion(item.label)}
                          className="p-2 text-white/60 hover:text-white"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          {isAccordionOpen ? (
                            <Minus className="w-4 h-4 text-accent" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Accordion children */}
                    <AnimatePresence>
                      {hasDropdown && isAccordionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4 pt-2 space-y-2 border-l border-white/10 mt-2"
                        >
                          {item.dropdown!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-xs font-heading tracking-widest text-grey-body hover:text-white transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-6 border-t border-white/10 text-xs font-body text-grey-body flex flex-col gap-1.5">
              <span className="text-white font-medium">{siteConfig.address}</span>
              <span>{siteConfig.phone} &bull; {siteConfig.email}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
