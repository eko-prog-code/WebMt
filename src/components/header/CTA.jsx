import React from 'react';
import CV from '../../assets/Rasif Taghizade Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
      Lihat Demo Aplikasi
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.medictech" className="btn btn-primary">
      Download Gratis
      </a>
    </div>
  );
};

export default CTA;
