import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Button from "./ui/Button";

const MobileNavs = ({ onClose }: {onClose: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    };

    const handleScroll = () => {
      onClose(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      className="absolute top-10 left-0 w-full bg-dark-violet z-10 flex flex-col justify-center items-center rounded p-6"
    >
      <ul className="text-white text-center flex flex-col gap-3">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <div className="border-b-[1px] border-opacity-50 border-gray w-full my-4"></div>
      <ul className="text-white text-center flex flex-col gap-3 w-full">
        <li>
          <a href="/">Login</a>
        </li>
        <li className="w-full">
          <Button variant="rounded">Sign Up</Button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileNavs;
