"use client";

import { useEffect, useState } from "react";
import logo from "~/assets/images/logo.png?url";
import MenuIcon from "~/assets/icons/menu.svg?react";
import CloseIcon from "~/assets/icons/close.svg?react";

import { Sparkles } from "./sparkles";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

type NavLink = {
  id: string;
  title: string;
  link: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const navLinks: Array<NavLink> = [
  {
    id: "old site",
    title: "Old Site",
    link: "https://sudh.online",
    target: "_blank",
  },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<(typeof navLinks)[number]["id"] | "">(
    "",
  );

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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="size-10 object-contain" />
          <Sparkles>
            <p className="cursor-pointer text-lg font-bold text-white">
              Sudhanshu
            </p>
          </Sparkles>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                "cursor-pointer text-lg font-medium hover:text-white",
                {
                  "text-white": active === link.id,
                  "text-secondary": active !== link.id,
                },
              )}
            >
              <a
                href={link.link}
                onClick={() => setActive(link.id)}
                target={link.target}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          {isOpen ? (
            <CloseIcon
              className="size-[28px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <MenuIcon
              className="size-[28px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}

          <div
            className={cn(
              "black-gradient absolute right-0 top-20 z-20 mx-4 my-2 flex min-w-[140px] rounded-xl p-6",
              { hidden: !isOpen },
            )}
          >
            <div className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={cn(
                    "font-poppins m-0 cursor-pointer p-0 text-[16px] font-medium",
                    {
                      "text-white": active === link.id,
                      "text-secondary": active !== link.id,
                    },
                  )}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setActive(link.id);
                  }}
                >
                  <a href={link.link} target={link.target}>
                    {link.title}
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
