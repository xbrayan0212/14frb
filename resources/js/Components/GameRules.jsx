import { useState } from "react";

export default function GameRules() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-center">
            {/* Botón que abre el modal */}
            <a
                className="mt-6 inline-block rounded-full px-6 py-3 bg-pink-300 text-white text-lg font-semibold shadow-md transition-all hover:bg-pink-500 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                Presióname
            </a>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-gray-800">Reglas del Juego</h2>
                        <p className="mt-4 text-gray-600">
                            Esta página está hecha especialmente para ti por San Valentín.  
                            Habrá imágenes que, al hacer click, podrían mostrar una frase o hacerte una pregunta.  
                            Para encontrar la respuesta, debes tomar una carta dentro de la caja que te di como regalo.  
                            ¡Espero que te diviertas!
                        </p>
                        <img src="https://art.pixilart.com/sr2904a114ceb62.png" alt="" />
                        <button
                            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
