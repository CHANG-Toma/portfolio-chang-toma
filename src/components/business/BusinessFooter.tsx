"use client";

import React from "react";

const BusinessFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cbtBorder px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-[13px] text-mist">
          <span className="text-snow">CodeByToma</span>
          <span className="mx-2 opacity-40">·</span>
          © {year}
        </p>
      </div>
    </footer>
  );
};

export default BusinessFooter;
