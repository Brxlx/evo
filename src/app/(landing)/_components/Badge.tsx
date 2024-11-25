import './animations.css';

import { Badge as UIBadge } from '@/components/ui/badge';

export function Badge() {
  return (
    <div className="animate-fade-in-down">
      <UIBadge
        className="
          bg-secondary/50 
          text-secondary/80 
          animate-pulse
          relative
          inline-flex
          items-center
          hover:bg-secondary/60
        "
      >
        <span className="animate-scale block">Transcrição de áudio provida por IA</span>
      </UIBadge>
    </div>
  );
}
