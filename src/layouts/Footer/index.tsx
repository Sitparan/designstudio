"use client";

import {
  FooterLogo,
  FooterNav,
  SocialLinks,
  LegalLinks,
  Copyright,
} from "./components";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 mt-4 md:mb-0">
            <FooterLogo />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            {/* <FooterNav /> */}
            <div className="h-6 w-px bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] hidden md:block"></div>
            <SocialLinks />
          </div>
        </div>
        {/* <div className="mt-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
          <LegalLinks />
        </div> */}
      </div>
    </footer>
  );
}
