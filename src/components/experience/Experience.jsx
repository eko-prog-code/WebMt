import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Apakah Klinik Anda mengalami masalah ini?</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Operasional masih manual</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillExclamationTriangleFill className="experience__details-icon" />
              <h4>Tidak melakukan Dokumentasi</h4>
            </article>
            <article className="experience__details">
              <BsFillExclamationTriangleFill className="experience__details-icon" />
              <h4>Rekam medis masih di kertas</h4>
            </article>
            <article className="experience__details">
              <BsFillExclamationTriangleFill className="experience__details-icon" />
              <h4>Data tidak lengkap, sulit di cari</h4>
            </article>
            <article className="experience__details">
              <BsFillExclamationTriangleFill className="experience__details-icon" />
              <h4>Belum mendigitalkan Rekam Medis</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience