import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

export default function TestimonialSlider() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="font-bold mb-6 not-italic text-5xl">
        <span style={{ color: '#263B7E' }}>Testi</span>
        <span style={{ color: '#5C1F5B' }}>monials</span>
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
      <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client 1"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-500 text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <span className="text-yellow-500 mt-2">★★★★★</span>
          </div>
        </SwiperSlide>        
         </Swiper>
    </div>
  );
}
