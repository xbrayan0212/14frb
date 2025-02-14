import { motion } from "framer-motion";

const ScaleUp = ({ children, duration = 1.5 }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUp;
