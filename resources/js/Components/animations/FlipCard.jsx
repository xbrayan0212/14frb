import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard({
  frontImage,
  backText,
  className = "",
  objectPosition = "center",
  backColor = "#fea6e8", // Azul predeterminado
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${className}`} // Permite personalizar el tamaño con Tailwind
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Frente (Imagen) */}
        <div
          className="absolute w-full h-full shadow-lg rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={frontImage}
            alt="Frente"
            className="w-full h-full object-cover rounded-xl"
            style={{ objectPosition }}
          />
        </div>

        {/* Atrás (Texto) */}
        <div
          className="absolute w-full h-full text-white shadow-lg rounded-xl flex justify-center items-center text-sm md:text-xl font-semibold p-4 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: backColor, // Permite cambiar el color de fondo
          }}
        >
          {backText}
        </div>
      </motion.div>
    </div>
  );
}
