import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [current, setCurrent] = useState(0);

  // 🔥 AGREGA TUS 13 FOTOS AQUÍ
  const images = [
    "/images/foto1.jpeg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpeg",
    "/images/foto5.jpeg",
    "/images/foto6.jpeg",
    "/images/foto7.jpeg",
    "/images/foto8.jpeg",
    "/images/foto9.jpeg",
    "/images/foto10.jpeg",
    "/images/foto11.jpeg",
    "/images/foto12.jpeg",
    "/images/foto13.jpeg",
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // 🔥 AUTOPLAY CADA 4 SEGUNDOS
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full"
      >
        <div className="rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden p-6 text-center space-y-6">
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center"
          >
            <Heart className="w-16 h-16 text-pink-600" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-800">
            Nuestra Historia 💖
          </h1>

          <div className="relative w-full h-80 flex items-center justify-center overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="recuerdo"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover absolute"
              />
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-3 bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 bg-white/80 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* 🔥 INDICADORES */}
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === current
                    ? "bg-pink-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setShowLetter(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl px-8 py-4 text-lg shadow-xl transition hover:scale-105"
          >
            Toca aquí ❤️
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-pink-600">
                Para ti, mi amor 💌
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Te amo muchísimo. Perdóname por ser tonto a veces.
                Estoy aprendiendo cada día para ser mejor por ti.
                Gracias por estar conmigo y por tu paciencia.
                Eres lo mejor que me ha pasado 💖
              </p>

              <button
                onClick={() => setShowLetter(false)}
                className="mt-6 bg-pink-600 hover:bg-pink-700 text-white rounded-xl px-6 py-2"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
