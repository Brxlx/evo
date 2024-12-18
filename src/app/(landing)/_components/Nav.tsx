'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { buttonVariants } from '@/app/consts/buttonVariants';
import { landingPageTexts } from '@/app/consts/texts';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block border-b p-4 fixed w-full bg-white/80 dark:bg-dark dark:text-white backdrop-blur-sm z-50"
    >
      <div className="mx-auto w-full flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <Button variant="link" className="text-black dark:text-white">
            {landingPageTexts.pt.navigation.features}
          </Button>
          <Button variant="link" className="text-black dark:text-white">
            {landingPageTexts.pt.navigation.pricing}
          </Button>
          <Button variant="link" className="text-black dark:text-white">
            {landingPageTexts.pt.navigation.documentation}
          </Button>
          <div className="flex gap-2 ml-10">
            {/* <ThemeToggle /> */}
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button variant="outline" className="bg-gray-300/60">
                {landingPageTexts.pt.navigation.signIn}
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-primary/90 hover:bg-primary">
                {landingPageTexts.pt.navigation.getStarted}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className="lg:hidden">
      {/* Header fixo com logo e botão do menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-dark z-50 px-4 py-3 flex items-center justify-between border-b">
        <Logo />
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white dark:bg-dark z-40 pt-16"
          >
            <div className="flex flex-col h-full">
              {/* Links de navegação */}
              <div className="px-6 py-8 space-y-6">
                <a
                  href="/recursos"
                  className="block text-xl font-medium text-gray-800/80 hover:text-gray-900 dark:text-white/80 dark:text-white transition-colors"
                >
                  Recursos
                </a>
                <a
                  href="/precos"
                  className="block text-xl font-medium text-gray-800/80 hover:text-gray-900 dark:text-white/80 dark:text-white transition-colors"
                >
                  Preços
                </a>
                <a
                  href="/documentacao"
                  className="block text-xl font-medium text-gray-800/80 hover:text-gray-900 dark:text-white/80 dark:text-white transition-colors"
                >
                  Documentação
                </a>
              </div>

              {/* Botões de ação */}
              <div className="mt-auto p-6 flex flex-col items-center justify-center space-y-4 border-t">
                <button className="w-4/5 py-3 px-6 text-primary font-medium border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Entrar
                </button>
                <button className="w-4/5 py-3 px-6 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors">
                  Começar Agora
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
