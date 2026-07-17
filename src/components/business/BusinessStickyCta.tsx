"use client";

import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const BusinessStickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      if (!contact) {
        setVisible(window.scrollY > 400);
        return;
      }
      const rect = contact.getBoundingClientRect();
      const nearContact = rect.top < window.innerHeight * 0.85;
      setVisible(window.scrollY > 380 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[90] border-t border-cbtBorder bg-ink/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="mailto:toma11chang@gmail.com?subject=CodeByToma%20—%20Devis%20gratuit"
        className="cursor-target flex w-full items-center justify-center gap-2 rounded-md bg-snow py-3 text-[13px] font-medium text-ink"
      >
        <Mail className="h-3.5 w-3.5" />
        Obtenir mon devis gratuit
      </a>
    </div>
  );
};

export default BusinessStickyCta;
