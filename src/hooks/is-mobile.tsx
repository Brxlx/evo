'use client';

import { useEffect, useState } from 'react';

// Definindo um ponto de quebra padrão para mobile (você pode ajustar conforme necessário)
const MOBILE_BREAKPOINT = 768; // md breakpoint do Tailwind

export function useIsMobile() {
  // Inicializamos com null para evitar hidratação incorreta
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Função para checar o tamanho da tela
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
    };

    // Checa inicialmente
    checkMobile();

    // Debounce para otimizar performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    // Adiciona listener para resize
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  return isMobile;
}
