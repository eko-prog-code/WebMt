import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from '../../assets/Rasif Tagizade image.jpg';
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Mitra Kami</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"></div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Dokter</h5>
              <small>Klinik dan atau Praktek Mandiri</small>
            </article>
            <article className="about__card">
            <FaAward className="about__icon" />
              <h5>Bidan, Perawat</h5>
              <small>Klinik dan atau Praktek Mandiri</small>
            </article>
          </div>
          <p>
            Telah di gunakan untuk tenaga Kesehatan di seluruh Indonesia, dalam memperkaya referensi pemberian terapi obat, Rekam Medis Digital
            telah mendorong terwujudnya Permenkes No.24 tahun 2022 pasal 45: "Seluruh faskes di Indonesia harus menerapkan Rekam Medis Elektronik sesuai ketentuan peraturan ini
            paling lambat 31 Desember 2023", MedicTech Mobile 1 aplikasi multi manfaat juga menyediakan Layanan Kesehatan Online sehingga mempermudah masyarakat mengakses Layanan: Sunat Modern, Baby Spa, Mom Spa, Rawat Luka Modern, dll
          </p>
          <a href="#contact" className="btn btn-primary">
            Download Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
