"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        onClick={() => setOpen(false)}
        aria-label="Ember & Fig home"
      >
        <span className="brand-mark">E & F</span>
        <span className="brand-name">Ember & Fig</span>
      </Link>

      <nav
        className={`nav ${open ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          className="nav-reserve"
          href="/reservations"
          onClick={() => setOpen(false)}
        >
          Book a table <ArrowUpRight size={15} />
        </Link>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
