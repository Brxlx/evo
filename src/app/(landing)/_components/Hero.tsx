'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { buttonVariants } from '@/app/consts/buttonVariants';
import { landingPageTexts } from '@/app/consts/texts';
import { Button } from '@/components/ui/button';

import { Badge } from './Badge';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [inView, target, duration]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <motion.section
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="pt-32 pb-20 px-4"
    >
      <div className="container mx-auto text-center">
        <Badge />
        <h1 className="text-6xl font-bold mb-6">
          {landingPageTexts.pt.hero.blackTitle}{' '}
          <motion.span
            className="text-primary inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            {landingPageTexts.pt.hero.foregroundTitle}
          </motion.span>
        </h1>

        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {landingPageTexts.pt.hero.subtitle}
        </motion.p>

        <div className="flex gap-4 justify-center">
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" className="bg-primary/90 hover:bg-primary px-8">
              {landingPageTexts.pt.actions.startForFree}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" variant="outline" className="px-8">
              {landingPageTexts.pt.actions.watchDemo}
            </Button>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16" ref={ref}>
          <motion.div
            className="text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter target={landingPageTexts.pt.metrics.accuracy.value} />%
            </h3>
            <p className="text-gray-600">{landingPageTexts.pt.metrics.accuracy.label}</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter target={landingPageTexts.pt.metrics.languages.value} />+
            </h3>
            <p className="text-gray-600">{landingPageTexts.pt.metrics.languages.label}</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedCounter target={landingPageTexts.pt.metrics.speed.value} />x
            </h3>
            <p className="text-gray-600">{landingPageTexts.pt.metrics.speed.label}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
