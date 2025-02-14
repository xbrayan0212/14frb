import { useState } from "react";

export default function ImageModal({ imageSrc, question, smallImageSrc, imageClass }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Imagen principal con tamaño ajustado desde el prop */}
            <img 
                className={`object-cover ${imageClass} h-auto cursor-pointer`} // Aplicamos la clase pasada como prop
                src={imageSrc} 
                alt="Image"
                onClick={() => setIsOpen(true)}
            />

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{question}</h2>
                        
                        {/* Imagen pequeña */}
                        {smallImageSrc && (
                            <div className="flex justify-center mb-4">
                                <img
                                    className="w-24 h-24 object-cover rounded-full border-4 border-pink-500" // Aquí también puedes ajustar el tamaño si es necesario
                                    src={smallImageSrc}
                                    alt="Small Image"
                                />
                            </div>
                        )}

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

