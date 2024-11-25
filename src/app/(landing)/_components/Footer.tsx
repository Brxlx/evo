import React from 'react';

import { landingPageTexts } from '@/app/consts/texts';

export function Footer() {
  return (
    <footer className="w-full bg-foreground dark:bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-8 text-white">
          <div className="flex flex-col items-center text-center w-full">
            <h3 className="font-bold text-lg mb-4">{landingPageTexts.pt.footer.product}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.features}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.documentation}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center w-full">
            <h3 className="font-bold text-lg mb-4">{landingPageTexts.pt.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.termsOfService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  {landingPageTexts.pt.footer.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Evo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
