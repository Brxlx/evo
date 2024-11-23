'use client';

import { motion } from 'framer-motion';

import { landingPageTexts } from '@/app/consts/texts';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 ">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">{landingPageTexts.pt.cta.title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{landingPageTexts.pt.cta.subtitle}</p>
        <Button
          size="lg"
          variant="default"
          className="bg-primary text-white hover:bg-primary/80 transition animate-bounce hover:scale-110 duration-750 px-8"
        >
          {landingPageTexts.pt.cta.button}
        </Button>
      </motion.div>
    </section>
  );
}
