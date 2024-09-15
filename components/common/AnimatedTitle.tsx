import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";

const AnimatedTitle = ({ title, styles }: { title: string; styles: string }) => {
  const { ref, isInView } = useInView({
    threshold: 0.1, 
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className={`${styles}`}
    >
      {title}
    </motion.h2>
  );
};

export default AnimatedTitle;
