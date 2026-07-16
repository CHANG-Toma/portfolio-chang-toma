"use client";

import BusinessNav from "@/components/business/BusinessNav";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessOffers from "@/components/business/BusinessOffers";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessApproach from "@/components/business/BusinessApproach";
import BusinessContact from "@/components/business/BusinessContact";
import BusinessFooter from "@/components/business/BusinessFooter";
import BusinessStickyCta from "@/components/business/BusinessStickyCta";

const HomePage = () => {
  return (
    <div className="business-theme relative min-h-screen bg-ink text-mist">
      <BusinessNav />
      <main>
        <BusinessHero />
        <BusinessOffers />
        <BusinessProcess />
        <BusinessApproach />
        <BusinessContact />
      </main>
      <BusinessFooter />
      <BusinessStickyCta />
    </div>
  );
};

export default HomePage;
