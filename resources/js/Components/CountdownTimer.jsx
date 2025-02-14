import { useState, useEffect } from "react";
import ImageModal from "@/Components/ImageModal";
const CountdownTimer = ({ startDate }) => {
    const calculateTimeElapsed = () => {
        const difference = new Date() - new Date(startDate);
        let timeElapsed = {};

        if (difference > 0) {
            timeElapsed = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeElapsed;
    };

    const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(calculateTimeElapsed());
        }, 1000);

        return () => clearInterval(timer);
    }, [startDate]);

    return (
        <section className="flex container items-center bg- py-10 px-5 rounded-lg mx-auto space-y-8">
            <div className="text-center w-full">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">El tiempo a tu lado</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-lg sm:text-2xl text-gray-800 bg-red-50 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-500">Días</span>
                        <span className="font-bold text-3xl">{timeElapsed.days}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-500">Horas</span>
                        <span className="font-bold text-3xl">{timeElapsed.hours}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-500">Minutos</span>
                        <span className="font-bold text-3xl">{timeElapsed.minutes}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-500">Segundos</span>
                        <span className="font-bold text-3xl">{timeElapsed.seconds}</span>
                    </div>
                </div>
                <p className="mt-4 text-lg text-gray-600 italic">Cada segundo cuenta cuando estoy contigo.</p>
            </div>
       

            <div className="flex justify-center w-64 ">
               
                    <ImageModal
                            imageSrc="https://kuromi.co.uk/wp-content/uploads/2024/05/kuromi-cute-1.png"
                            question="¿Sabes por qué te llamo mi reina?"
                            smallImageSrc="https://files.merca20.com/uploads/2024/08/kuromi-s.jpg" // Imagen pequeña
                              className="w-24 h-24"
                        />
            </div>

            <div className="text-center w-full mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Nuestro Viaje</h1>
                <img
                    src="/images/reinalove.jpeg"
                    alt="Nuestro Viaje"
                    className="mx-auto rounded-lg shadow-lg mb-4 w-auto max-h-[600px] sm:w-3/4 lg:w-2/3 object-cover object-top"
                />
                <p className="text-lg text-gray-600 italic">Cada momento contigo se convierte en un recuerdo único y especial.</p>
            </div>
        </section>
    );
};

export default CountdownTimer;
