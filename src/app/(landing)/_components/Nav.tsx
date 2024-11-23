'use client';

import { motion } from 'framer-motion';

import { buttonVariants } from '@/app/consts/buttonVariants';
import { landingPageTexts } from '@/app/consts/texts';
import { Button } from '@/components/ui/button';

export function Nav() {
  return (
    <nav className="border-b p-4 fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.span
            className="text-2xl font-bold text-green-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Evo
          </motion.span>
        </div>
        <div className="flex gap-4">
          <Button variant="link">{landingPageTexts.pt.navigation.features}</Button>
          <Button variant="link">{landingPageTexts.pt.navigation.pricing}</Button>
          <Button variant="link">{landingPageTexts.pt.navigation.documentation}</Button>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button className="bg-green-500 hover:bg-green-600">
              {landingPageTexts.pt.navigation.getStarted}
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
