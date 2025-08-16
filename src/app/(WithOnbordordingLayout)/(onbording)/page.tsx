"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1751444786/f1xlfufo0mp5dmymxx5f.jpg",
    title: "Discover Products",
    description: "Explore a wide range of amazing products.",
  },
  {
    image:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1753952461/zoab2bfxkd2yisxo618o.jpg",
    title: "Easy Shopping",
    description: "Shop with ease and get your products.",
  },
  {
    image:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1749142123/cf4wyfp7i6dkmfbg8czw.jpg",
    title: "Secure Payments",
    description: "Pay securely with multiple options.",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      router.push("/home");
    } else {
      swiperRef.current?.slideNext();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col justify-between px-8 py-6">
      {/* Skip button */}
      <div className="flex justify-end">
        <button
          onClick={() => router.push("/home")}
          className="text-indigo-600 font-medium hover:underline"
        >
          Skip
        </button>
      </div>

      {/* Swiper */}
      <div className="flex-1 flex items-center justify-center">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full max-w-5xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center h-full px-6">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[60vh] w-auto object-contain mb-8 rounded-xl shadow-lg"
                />
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-600 text-xl max-w-lg">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 max-w-5xl mx-auto w-full">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-5 py-3 rounded-lg border text-lg font-medium ${
            currentIndex === 0
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-indigo-600 border-indigo-600 hover:bg-indigo-50"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-lg font-medium hover:bg-indigo-700"
        >
          {currentIndex === slides.length - 1 ? "Go to App" : "Next"}
        </button>
      </div>
    </div>
  );
}
