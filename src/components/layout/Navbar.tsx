import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/logo/logo-real.svg";
import logo_text from "../../assets/logo/group_logo_text.svg";

import { navigation } from "../../data/navigation";
import useScroll from "../../hooks/useScroll";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const location = useLocation();
  const scrolled = useScroll();

  const [open, setOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const transparent = isHomePage && !scrolled;

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full",
        "font-['Barlow_Condensed']",
        "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",

        // Height
        transparent
          ? "h-[76px] sm:h-[84px] lg:h-[96px]"
          : "h-[70px] sm:h-[76px] lg:h-[88px]",

        // Background
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[#F5C400] bg-[#111111]/95 backdrop-blur-xl"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-full w-full items-center justify-between",

          // Responsive horizontal padding
          "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[60px]"
        )}
      >
        {/* ===================================================== */}
        {/* LOGO */}
        {/* ===================================================== */}

        <Link
          to="/"
          className={cn(
            "flex items-center",
            "shrink-0",
            "transition-all duration-300",

            // Logo width
            "w-[170px] sm:w-[190px] md:w-[240px] lg:w-[260px]"
          )}
        >
          {/* Logo symbol */}
          <img
            src={logo}
            alt="Axis & Grid"
            className={cn(
              "h-auto w-auto shrink-0 object-contain",

              "h-[42px] sm:h-[48px] md:h-[52px] lg:h-[58px]"
            )}
          />

          {/* Logo text */}
          <img
            src={logo_text}
            alt="Axis & Grid"
            className={cn(
              "ml-2 h-auto min-w-0 flex-1 object-contain",

              "max-h-[34px] sm:max-h-[38px] md:max-h-[42px] lg:max-h-[46px]"
            )}
          />
        </Link>

        {/* ===================================================== */}
        {/* DESKTOP NAV */}
        {/* ===================================================== */}

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative whitespace-nowrap",
                  "py-2",
                  "text-[18px] xl:text-[20px]",
                  "font-medium uppercase",
                  "tracking-[1.5px]",
                  "transition-colors duration-300",

                  // Underline
                  "after:absolute after:bottom-0 after:left-1/2",
                  "after:h-[2px] after:w-0",
                  "after:-translate-x-1/2",
                  "after:bg-[#F5C400]",
                  "after:transition-all after:duration-300",

                  // Hover
                  "hover:text-[#F5C400]",
                  "hover:after:w-full",

                  // Active
                  isActive
                    ? "text-[#F5C400] after:w-full"
                    : "text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#F5C400]" />
                  )}

                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ===================================================== */}
        {/* MOBILE MENU BUTTON */}
        {/* ===================================================== */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex items-center justify-center",
            "rounded-sm",
            "p-2",
            "text-white",
            "transition-colors duration-300",
            "hover:text-[#F5C400]",
            "lg:hidden"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-7 w-7 sm:h-8 sm:w-8" />
          ) : (
            <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
          )}
        </button>
      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      <div
        className={cn(
          "absolute left-0 top-full w-full lg:hidden",

          "border-t border-[#F5C400]/25",
          "bg-[#111111]/98",
          "backdrop-blur-xl",

          "transition-all duration-300 ease-in-out",

          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative block",
                  "border-b border-white/10",
                  "px-6 py-5 sm:px-8",

                  "font-['Barlow_Condensed']",
                  "text-lg sm:text-xl",
                  "font-medium uppercase",
                  "tracking-[1.5px]",

                  "transition-colors duration-300",

                  isActive
                    ? "bg-white/[0.03] text-[#F5C400]"
                    : "text-white hover:bg-white/[0.03] hover:text-[#F5C400]"
                )
              }
            >
              {({ isActive }) => (
                <div className="flex items-center gap-3">
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F5C400]" />
                  )}

                  {item.label}
                </div>
              )}
            </NavLink>
          ))}

          {/* Contact */}
          <Link
            to="/contact"
            className={cn(
              "block",
              "bg-[#F5C400]",
              "px-6 py-5 sm:px-8",
              "text-center",

              "font-['Barlow_Condensed']",
              "text-lg sm:text-xl",
              "font-semibold uppercase",
              "tracking-[1.5px]",

              "text-[#111111]",
              "transition-colors duration-300",
              "hover:bg-[#ffd83d]"
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;