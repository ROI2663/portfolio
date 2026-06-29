"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[#eddbc9]/80 backdrop-blur-md">
      <div className="section-container flex h-18 items-center justify-between">
        <a href="#hero" className="text-lg font-black">
          Yasuda Portfolio
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-md border border-[var(--color-border)] p-2 md:hidden"
          aria-label="メニューを開閉"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="section-container border-t border-[var(--color-border)] py-4 md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition hover:bg-[var(--color-text)]/5 hover:text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
