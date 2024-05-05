import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function Wrapper({
  children,
  forceMaxWidth,
}: {
  children?: ReactNode;
  forceMaxWidth?: boolean;
}) {
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      style={{
        maxWidth: forceMaxWidth ? '70ch' : 'none',
        paddingBottom: '2rem',
      }}
    >
      {children}
    </motion.div>
  );
}
