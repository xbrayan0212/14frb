import { Head, Link } from '@inertiajs/react';
import { motion } from "framer-motion"
import FadeIn from "@/Components/animations/FadeIn";
import SlideIn from "@/Components/animations/SlideIn";
import Bounce from "@/Components/animations/Bounce";
import ScaleUp from "@/Components/animations/ScaleUp";
import SlideUp from "@/Components/animations/SlideUp";
import SlideDown from "@/Components/animations/SlideDown";
import FlipCard from "@/Components/animations/FlipCard";
import CountdownTimer from "@/Components/CountdownTimer";
import GameRules from "@/Components/GameRules";
import ImageModal from "@/Components/ImageModal";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
          
            <main className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen w-full p-6 md:p-20 bg-[#faf2e9]">
            <ScaleUp>
                    <div className="flex justify-center items-center min-h-full">
                        {/* Usamos el nuevo componente con imagen, pregunta y la imagen pequeña */}
                        <ImageModal
                            imageSrc="/images/pikachu.png"
                            question="¿Cómo sabes que te quiero?"
                            smallImageSrc="https://detectivepikachu.pokemon.com/_images/characters/pikachu-intro.png" // Imagen pequeña
                        />
                    </div>
                </ScaleUp>
                <Bounce>
                    <div className="col-span-1 flex flex-col justify-center items-center min-h-full py-10 px-6 md:px-12 text-center">
                        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold leading-snug">
                            Mar<span className="text-yellow-500">🌻</span>lyn Gomez <br />
                            <span className="text-2xl md:text-3xl text-gray-700">&</span> <br />
                            Brayan R<span className="text-pink-500">♡</span>driguez
                        </h1>

                        <h2 className="mt-4 text-base md:text-lg font-semibold text-gray-700 underline underline-offset-8">
                            1 October 2024 | 8:12 PM
                        </h2>
                        <a className="mt-6 inline-block rounded-full px-6 py-3" href="#">
                        <GameRules />
                        </a>
                      
                        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                            Amar no se trata solo de los momentos felices, sino de elegirnos todos los días, incluso en los momentos difíciles. 
                            Y yo, sin dudarlo, siempre te elegiría a ti.
                        </p>
                    </div>
                </Bounce>
                <ScaleUp>
                    <div className="flex justify-center items-center min-h-full">
                    <ImageModal
                            imageSrc="/images/kuromi.png"
                            question="¿Sabes qué te hace tan especial?"
                            smallImageSrc="https://mystickermania.com/cdn/stickers/noob-pack/kuromi-laughing-512x512.png" // Imagen pequeña
                        />
                    </div>
                </ScaleUp>
            </main>
           
           
            <section className=" mx-auto container min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
                <div className=" flex-1 p-4">
                <SlideIn direction="left">
                    <h1 className="text-4xl font-bold text-gray-900 uppercase text-center ">
                        Nuestra historia
                    </h1>
                    <p className="text-base text-gray-700 leading-relaxed my-6 mx-auto text-justify md:text-lg">
                        Desde el primer mensaje, sentí que había algo especial entre nosotros. Todo comenzó con una simple respuesta en Instagram, pero se convirtió en la mejor historia de mi vida. Nos fuimos conociendo, enamorándonos poco a poco, hasta que las palabras no fueron suficientes para describir lo que sentíamos. Hemos pasado por altas y bajas, peleas y despedidas, pero siempre encontramos el camino de regreso el uno al otro. Porque lo nuestro es más que una historia, es un destino.
                    </p>
                    <SlideUp> 
                    <div className="flex justify-center">
                    <ImageModal
                            imageSrc="/images/pokebola.png"
                            question="¿Por qué te elegí entre tantas personas?"
                            smallImageSrc="https://st2.depositphotos.com/4201469/11665/v/450/depositphotos_116653256-stock-illustration-vector-color-pokeball-objects-for.jpg" // Imagen pequeña
                             imageClass="w-56 mt-20"
                        />
                    </div>
                    </SlideUp>
                    </SlideIn> 
                </div>
             
                <div className="flex-1 flex flex-col items-center text-center p-4 rounded-2xl transition-all bg-pink-300 md:bg-white  md:hover:bg-pink-200 ">
                <SlideDown>
                    <div className="mb-4">
                        <img className="max-w-xs md:max-w-md" src="/images/loveHeart.png" alt="Corazón" />
                    </div>
                </SlideDown>
                    <p className="text-sm text-gray-800 font-medium leading-relaxed max-w-lg md:text-lg px-4">
                        Eres mi persona favorita, mi mejor casualidad y mi lugar seguro. No importa dónde esté o qué esté haciendo, si es contigo, siempre será el mejor momento.
                    </p>

                    <ImageModal
                            imageSrc="https://images.vexels.com/media/users/3/147196/isolated/preview/ef9bd0e6f6f0b12e0735846300ae1d0d-sunflower-illustration.png"
                            question="¿Por qué  eres un girasol?"
                            smallImageSrc="https://images.vexels.com/media/users/3/235098/isolated/svg/85dae46814913e4e73ca0695f915bf1d.svg" // Imagen pequeña
                             imageClass="w-20 md:w-28 mt-20"
                        />
                </div>

            </section>
            <SlideUp> 
            <section className="mx-auto w-full bg-[#faf2e9] min-h-screen flex flex-col items-center justify-center gap-10 px-4 sm:px-6 py-10">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-8xl gap-10">

                    {/* Contenedor de Tarjetas */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 min-h-[500px] max-w-[800px] w-full">
                        <FlipCard
                            className="col-span-1 row-span-4"
                            frontImage="/images/rosa2.jpeg"
                            backText="Así como la luna brilla en la noche, tú iluminas mi vida todos los días 🌙."
                            objectPosition="right"
                        />
                        <FlipCard
                            className="col-span-1 row-span-2"
                            frontImage="/images/lovesensual.jpeg"
                            backText="Aunque me cuesta expresar lo que siento, sabes que te quiero más que a nada❤️."
                            objectPosition="right"
                        />
                        <FlipCard
                            className="col-span-1 row-span-2"
                            frontImage="/images/lovegengar.jpeg"
                            backText="Me cuesta encontrar las palabras a veces, pero nunca dudo en que eres lo mejor que me ha pasado 🫶."
                            objectPosition="top"
                        />
                        <FlipCard
                            className="col-span-2 row-span-2"
                            frontImage="/images/lovemuecas.jpeg"
                            backText="✨ Lo único que quiero es hacerte feliz, porque eso me hace feliz a mí ✨  "
                            objectPosition="top"
                        />
                    </div>

                    {/* Contenedor de Imagen y Texto */}
                    <div className="flex flex-col items-center text-center md:text-left max-w-md mx-auto">
                        <FlipCard
                            frontImage="https://images.vexels.com/media/users/3/201128/isolated/preview/e14c864d3754e558a75463ade70bbf1c-hilo-rojo-en-las-manos.png"
                            backText="Nuestro hilo rojo nunca se rompe"
                            className="w-64 sm:w-80 h-80 sm:h-96 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
                            objectPosition="center"
                            backColor="#fea6e8"
                        />
                        <p className="mt-8 sm:mt-16 text-base sm:text-lg font-medium text-gray-700 max-w-lg">
                            Me encanta recordar la primera vez que te vi, la primera vez que me sonreíste y la primera vez que supe que quería pasar mi vida contigo.
                        </p>
                    </div>

                </div>
            </section>
            </SlideUp>
            <SlideUp>
            <section className="container m-auto block lg:flex lg:flex-row min-h-screen items-center justify-between max-w-9xl gap-10 px-4 ">
            {/* Sección Izquierda */}
            <div className="flex flex-col flex-1">
                <h1 className="text-4xl font-mono font-bold text-gray-900 text-center p-16 mt-28">
                    Lo que nunca quiero que olvides
                </h1>
                <div className="max-w-96 m-auto">
                <ImageModal
                            imageSrc="https://www.pngplay.com/wp-content/uploads/4/Moon-No-Background.png"
                            question="¿Te has dado cuenta de lo especial que eres?"
                            smallImageSrc="https://cdn-icons-png.flaticon.com/512/4584/4584479.png" // Imagen pequeña
                             imageClass=" mt-20"
                        />
                </div>
                <div className="max-w-60 mt-12 center m-auto">
                
                    <ImageModal
                            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrkJAsvOT0bjw5Xxsal0O_s0wAd2x54F4nQ&s"
                            question="¿Sabes por qué siempre te miro con una sonrisa en el rostro?"
                            smallImageSrc="https://youtooz.com/cdn/shop/files/k3r5s547i5.png?v=1725889337" // Imagen pequeña
                             imageClass=" mt-0"
                        />
                </div>
            </div>

           
                {/* Sección Derecha: Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:min-w-[690px] border w-full gap-2">
                {/* Bloque 1 */}
                <div className="col-span-2 md:col-span-1">
                    <img src="/images/rosa4.jpeg" alt="" className="w-full h-full object-cover aspect-square" />
                </div>
                <div className="col-span-2 md:col-span-2 text-left px-5 py-5">
                    <h1 className="text-2xl font-extrabold text-purple-600 text-justify pb-5">Te volvería a elegir</h1>
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        Si el tiempo retrocediera, si la vida me diera otra oportunidad para empezar de nuevo, 
                        sin dudarlo ni un segundo, volvería a elegirte. Volvería a enamorarme de ti.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                    <ImageModal
                            imageSrc="https://i.pinimg.com/originals/40/1f/47/401f47be56536f6dfe860dea4f2b6fda.png"
                            question="¿Sabes por qué no me canso de estar contigo?"
                            smallImageSrc="https://pokestop.io/img/pokemon/gengar-256x256.png" // Imagen pequeña
                             imageClass=" w-16 h-16"
                        />
                </div>

                {/* Bloque 2 */}
                <div className="col-span-2 md:col-span-1">
                    <img src="/images/randomlove.jpeg" alt="" className="w-full h-full object-cover aspect-square" />
                </div>
                <div className="col-span-2 text-left px-5 py-5">
                    <h1 className="text-2xl font-extrabold text-pink-600 text-justify pb-2">Un “para siempre” contigo</h1>
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    No busco un amor perfecto, solo quiero un amor real, uno que supere cualquier obstáculo, que aprenda y crezca con cada día. Y si hay alguien con quien quiero compartirlo todo, eres tú. Un ‘para siempre’ contigo es todo lo que deseo.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                   
                    <ImageModal
                            imageSrc="https://mystickermania.com/cdn/stickers/noob-pack/sanrio-my-melody-shy-512x512.png"
                            question="¿Sabes por qué me haces sonreír sin parar?"
                            smallImageSrc="https://mystickermania.com/cdn/stickers/noob-pack/sanrio-my-melody-loves-candy-512x512.png" // Imagen pequeña
                             imageClass=" w-24 h-24"
                        />
                </div>

                {/* Bloque 3 */}
                <div className="col-span-2 md:col-span-1">
                    <img src="/images/ferialove.jpeg" alt="" className="w-full h-full object-cover aspect-square" />
                </div>
                <div className="col-span-2 text-left px-5 py-5">
                    <h1 className="text-2xl font-extrabold text-sky-600 text-justify">Te amo en cada detalle</h1>
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                        Te amo en la manera en que me miras, en la forma en que dices mi nombre, en los silencios que compartimos y en cada pequeño gesto de amor que tienes sin darte cuenta. En cada detalle tuyo encuentro un motivo más para amarte.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
          
            
                    <ImageModal
                            imageSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/alyr1-profile_image-96850221d3cdd6c7-300x300.png"
                            question=      "¿Sabes por qué me encanta estar a tu lado?"
                            smallImageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFRLYfgE4uqesQk829rNW6WVc-kEz6wsqCQ&s" // Imagen pequeña
                             imageClass=" w-24 h-24"
                        />
                </div>
            </div>

            </section>
            </SlideUp>
            <section className="min-h-screen bg-pink-100 flex items-center justify-center">
                 <CountdownTimer startDate="2024-10-01T00:00:00" />
            </section>

            <SlideDown>
                <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r h-screen py-16 px-6 rounded-lg shadow-lg mt-10">
                    <h2 className="text-5xl font-bold text-pink-600 animate-pulse">
                        Te amo ❤️
                    </h2>
                    <p className="text-xl text-gray-700 mt-4 max-w-lg">
                        Eres lo mejor que me ha pasado, y cada segundo contigo es un regalo.  
                        No importa el tiempo ni la distancia, siempre estaré a tu lado.  
                    </p>
        
                </section>
            </SlideDown>
   

        </>
    );
}
