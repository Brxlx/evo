import './animations.css';

import { Badge as UIBadge } from '@/components/ui/badge';

export function Badge() {
  return (
    <div className="animate-fade-in-down">
      <UIBadge
        className="
          bg-secondary/10 
          text-secondary/80 
          animate-pulse
          hover:bg-secondary
          relative
          inline-flex
          items-center
        "
      >
        <span className="animate-scale block">New Feature: AI-Powered Video Translation</span>
      </UIBadge>
    </div>
  );
}
