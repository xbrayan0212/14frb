import { motion } from "framer-motion";

const SlideIn = ({ children, direction = "up", duration = 2.5 }) => {
  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
