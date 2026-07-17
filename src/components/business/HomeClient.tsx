"use client";

import BusinessNav from "@/components/business/BusinessNav";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessBenefits from "@/components/business/BusinessBenefits";
import BusinessOffers from "@/components/business/BusinessOffers";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessSubscription from "@/components/business/BusinessSubscription";
import BusinessApproach from "@/components/business/BusinessApproach";
import BusinessFaq from "@/components/business/BusinessFaq";
import BusinessContact from "@/components/business/BusinessContact";
import BusinessFooter from "@/components/business/BusinessFooter";
import BusinessStickyCta from "@/components/business/BusinessStickyCta";
import BusinessMarquee from "@/components/business/BusinessMarquee";

const HomeClient = () => {
  return (
      <div className="business-theme relative min-h-screen bg-ink text-mist">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-snow focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-ink"
      >
        Aller au contenu
      </a>
      <BusinessNav />
      <main id="contenu-principal">
        <BusinessHero />
        <BusinessMarquee />
        <BusinessBenefits />
        <BusinessProcess />
        <BusinessOffers />
        <BusinessSubscription />
        <BusinessApproach />
        <BusinessFaq />
        <BusinessContact />
      </main>
      <BusinessFooter />
      <BusinessStickyCta />
    </div>
  );
};

export default HomeClient;
