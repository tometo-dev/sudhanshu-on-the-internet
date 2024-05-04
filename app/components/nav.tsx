"use client";

import { useEffect, useState } from "react";
import logo from "~/assets/images/logo.png?url";
import { Sparkles } from "./sparkles";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-20 flex w-full items-center px-6 py-5 sm:px-16",
        {
          "bg-primary": scrolled,
          "bg-transparent": !scrolled,
        },
      )}
    >
      <div className="mx-auto flex w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="size-10 object-contain saturate-200"
          />
          <Sparkles>
            <p className="cursor-pointer text-lg font-bold text-primary">
              Sudhanshu
            </p>
          </Sparkles>
        </Link>
      </div>
    </nav>
  );
}
