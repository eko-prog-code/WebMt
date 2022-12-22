import React from "react";
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Paket Nakes Fresh Graduate Rp. 25.000",
      img: IMG1,
      description:
        "Akses referensi Obat Lengkap, Hitung Dosis Otomatis, Rekam Medis Online, Bisa buka praktek Online, Edukasi dari Dokter Ahli, bergabung dengan Nakes Se-Indonesia",
      link: "https://wa.me/+62895600394345",
      github: "https://wa.me/+62895600394345",
    },
    {
      id: 2,
      title: "Paket Coba dulu Rp. 69.000",
      img: IMG4,
      description:
      "Akses referensi Obat Lengkap, Hitung Dosis Otomatis, Rekam Medis Online, Bisa buka praktek Online, Edukasi dari Dokter Ahli, bergabung dengan Nakes Se-Indonesia",
      link: "https://wa.me/+62895600394345",
      github: "https://wa.me/+62895600394345",
    },
    {
      id: 3,
      title: "Paket Praktek Mandiri Rp. 129.000",
      img: IMG2,
      description:
      "Akses referensi Obat Lengkap, Hitung Dosis Otomatis, Rekam Medis Online, Bisa buka praktek Online, Edukasi dari Dokter Ahli, bergabung dengan Nakes Se-Indonesia",
      link: "https://wa.me/+62895600394345",
      github: "https://wa.me/+62895600394345",
    },
    {
      id: 4,
      title: "Paket Gue punya Klinik Rp. 239.000",
      img: IMG3,
      description:
      "Akses referensi Obat Lengkap, Hitung Dosis Otomatis, Rekam Medis Online, Bisa buka praktek Online, Edukasi dari Dokter Ahli, bergabung dengan Nakes Se-Indonesia",
      link: "https://wa.me/+62895600394345",
      github: "https://wa.me/+62895600394345",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Kami memberi Solusi</h5>
      <h2>MedicTech (Satu Aplikasi Multi Fungsi)</h2>
      <h5>varian Paket Langganan:</h5>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Saya tertarik, Kak
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Berlangganan Sekarang
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
