import './animations.css';

import { Badge as UIBadge } from '@/components/ui/badge';

export function Badge() {
  return (
    <div className="animate-fade-in-down">
      <UIBadge
        className="
          bg-green-100 
          text-green-800 
          animate-pulse 
          hover:bg-green-100
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
