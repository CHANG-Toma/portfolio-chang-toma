"use client";

import { useLocation } from "react-router-dom";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Cette page n&apos;existe pas, tu t&apos;es perdu ? 👋</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;