import { motion } from 'framer-motion';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <motion.span
          className="text-2xl font-bold text-foreground"
          initial={{ opacity: 1, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Evo
        </motion.span>
      </Link>
    </div>
  );
}
