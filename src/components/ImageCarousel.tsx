import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel: React.FC = () => {
  const images = [
    './dist/assets/carrossel/greens.jpg',
    './dist/assets/carrossel/mill.jpg',
    './dist/assets/carrossel/murads.jpg',
    './dist/assets/carrossel/spx.jpg',
    './dist/assets/carrossel/spxvista.jpg',
    './dist/assets/carrossel/surprised.jpg',
    './dist/assets/carrossel/vistabuy.jpg',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;