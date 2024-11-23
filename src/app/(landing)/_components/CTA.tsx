import { motion } from 'framer-motion';

import { buttonVariants } from '@/app/consts/buttonVariants';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-green-500 text-white">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Videos?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are saving time and reaching global audiences with Nivo.
        </p>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-500 hover:bg-gray-100 px-8"
          >
            Get Started For Free
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
