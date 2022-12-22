import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGooglePlay} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">MedicTech</a>
      <ul className="permalinks">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Mitra Kami</a></li>
        <li><a href="#portfolio">Solusi Kami</a></li>
        <li><a href="#testimonials">Testimoni</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://wa.me/+62895600394345" target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
      <a href="https://play.google.com/store/apps/details?id=com.medictech" target="_blank" rel="noreferrer" ><FaGooglePlay /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MedicTech 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer