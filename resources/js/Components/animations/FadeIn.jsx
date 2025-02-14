import { motion } from "framer-motion";

const FadeIn = ({ children, duration = 2.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Se activa cuando el 20% es visible
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
