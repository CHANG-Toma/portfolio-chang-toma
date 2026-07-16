"use client";

import React from "react";
import Link from "next/link";

const BusinessFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cbtBorder px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-[13px] text-mist">
          <span className="text-snow">CodeByToma</span>
          <span className="mx-2 opacity-40">·</span>
          © {year}
        </p>
        <Link href="/portfolio" className="text-[13px] text-mist/60 hover:text-mist">
          Portfolio
        </Link>
      </div>
    </footer>
  );
};

export default BusinessFooter;
