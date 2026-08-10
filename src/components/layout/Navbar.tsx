import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { navigation } from "../../data/navigation";
import useScroll from "../../hooks/useScroll";
import { cn } from "../../lib/utils";


const Navbar = () => {
 
  
  
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  const transparent = isHomePage && !scrolled;

  return (
    
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "flex items-center justify-end px-[60px]",
          transparent
            ? "h-25 bg-transparent border-b border-transparent"
            : "h-[70px] bg-[#111111]/95 backdrop-blur-xl border-b border-[#F5C400]"
      )}
    >
     
      {/* Logo */}
      <Link to="/" className="absolute left-0 z-10 mt-10 sm:mt-15 lg:mt-25 md:mt-20 ml-5 lg:ml-10 md:ml-6 sm:ml-6 flex items-center gap-2">
        <img
          src={logo}
          alt="Axis & Grid Logo"
          className={cn(
            "w-full object-contain transition-transform duration-300 ease-in-out",
            scrolled ? "h-15 sm:h-25 md:h-20 lg:h-30" : "h-20 sm:h-30 md:h-30 lg:h-40"
          )}
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-9 lg:flex">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "relative py-2 font-inter text-[13px] font-medium uppercase tracking-[1.5px] transition-colors duration-300",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0",
                "after:-translate-x-1/2 after:bg-[#F5C400] after:transition-all after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:text-[#F5C400] hover:after:w-full",
                isActive ? "text-[#F5C400] after:w-full" : "text-white"
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



      {/* Mobile toggle */}
      <button
        className="text-white lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-t border-[#F5C400]/25 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block border-b border-white/10 px-6 py-5 font-inter text-[13px] font-medium uppercase tracking-[1.5px] text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-[#F5C400] px-6 py-5 text-center font-inter text-xs font-semibold uppercase tracking-[1.5px] text-[#111111]"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;