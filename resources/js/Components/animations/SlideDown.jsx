import { motion } from "framer-motion";

const SlideDown = ({ children, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }} // Empieza 50px más arriba y transparente
      whileInView={{ y: 0, opacity: 1 }} // Baja a su posición normal y aparece
      viewport={{ once: true, amount: 0.2 }} // Se activa cuando el 20% es visible
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default SlideDown;
