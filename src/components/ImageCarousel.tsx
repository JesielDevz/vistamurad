import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel: React.FC = () => {
  const images = [
    'https://i.ibb.co/jPYpNSZW/greens.jpg',
    'https://i.ibb.co/2LNJd7H/mill.jpg',
    'https://i.ibb.co/mFbFx35f/murads.jpg',
    'https://i.ibb.co/RksxtSZH/spx.jpg',
    'https://i.ibb.co/BHMv6BCP/spxvista.jpg',
    'https://i.ibb.co/hFbZfpbk/surprised.jpg',
    'https://i.ibb.co/pNvM6Yz/vistabuy.jpg',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Arts and memes created by the community, create yours too!
      </h2>
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
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain block"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
