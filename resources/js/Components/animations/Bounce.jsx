import { motion } from "framer-motion";

const Bounce = ({ children, duration = 2.5 }) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Bounce;
