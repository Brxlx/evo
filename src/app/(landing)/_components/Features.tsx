'use client';

import { motion } from 'framer-motion';
import { Globe, Wand2, Zap } from 'lucide-react';

import { landingPageTexts } from '@/app/consts/texts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {landingPageTexts.pt.features.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wand2 className="w-12 h-12 text-green-500 mb-4" />,
              title: landingPageTexts.pt.features.aiTranscription.title,
              content: landingPageTexts.pt.features.aiTranscription.description,
            },
            {
              icon: <Globe className="w-12 h-12 text-green-500 mb-4" />,
              title: landingPageTexts.pt.features.translation.title,
              content: landingPageTexts.pt.features.translation.description,
            },
            {
              icon: <Zap className="w-12 h-12 text-green-500 mb-4" />,
              title: landingPageTexts.pt.features.quickProcessing.title,
              content: landingPageTexts.pt.features.quickProcessing.description,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.content}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}