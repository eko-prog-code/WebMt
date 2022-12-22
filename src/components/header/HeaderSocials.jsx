import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href= "https://wa.me/+62895600394345" target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
      <a href="https://play.google.com/store/apps/details?id=com.medictech" target="_blank" rel="noreferrer" ><FaGooglePlay /></a>
    </div>
  )
}

export default HeaderSocials