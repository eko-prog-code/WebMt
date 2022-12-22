import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://wa.me/+6285769163058",
      name: 'Ns. Moh, Agus (Saras Care Center)',
      role: '(Saras Care Center). Improving open-source projects, one commit at a time.',
      test: 'Referensi Resep Obat sangat kami butuhkan untuk memberi terapi yang tepat.',
    },
    {
      id: 2,
      link: "https://wa.me/+6282329229380",
      name: 'Ibu Siti (Praktek Mandiri Bidan)',
      role: '(Praktek Mandiri Bidan)',
      test: "Akses Rekam Medis dan Referensi Obat sangat cepat, mudah mencari obat yang saya butuhkan",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from Mitra Kami</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsWhatsapp />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials