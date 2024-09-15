// components/AnimatedComponent.tsx
"use client";

import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AnimatedComponent = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const isVisible = useScrollAnimation(id);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
