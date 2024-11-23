import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { buttonVariants } from '@/app/consts/buttonVariants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    }, [inView, target]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <Badge />
        <h1 className="text-6xl font-bold mb-6">
          Transform Your Videos with{' '}
          <motion.span
            className="text-green-500 inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            AI Magic
          </motion.span>
        </h1>

        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Automatically transcribe, translate, and enhance your videos with our cutting-edge AI
          technology. Save hours of manual work.
        </motion.p>

        <div className="flex gap-4 justify-center">
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8">
              Start For Free
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
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
            <h3 className="text-4xl font-bold text-green-500">
              <AnimatedCounter target={99} />%
            </h3>
            <p className="text-gray-600">Transcription Accuracy</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-green-500">
              <AnimatedCounter target={50} />+
            </h3>
            <p className="text-gray-600">Supported Languages</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-green-500">
              <AnimatedCounter target={10} />x
            </h3>
            <p className="text-gray-600">Faster Than Manual</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
