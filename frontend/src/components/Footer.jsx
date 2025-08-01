import React from 'react';
// import whatsapp from '../images/whatsapp_4401461.png';
// import ig from '../images/ig.png';
// import tiktok from '../images/tik-tok_4782345 (1).png';
// import x from '../images/twitter_5968830.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate('/aboutUS');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleTermsClick = () => {
    navigate('/terms');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handlePrivacyClick = () => {
    navigate('/privacy');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  // const handleShowroomClick = () => {
  //   navigate('/showroom');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  const handleECatalogClick = () => {
    navigate('/e-catalog');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  const whatsappPhoneNumber = '2348066258729'; // REPLACE WITH YOUR ACTUAL PHONE NUMBER
  // Your preset message (URL-encoded)
  const presetMessage = encodeURIComponent(
    "Hello, I'm interested in your products. I saw your website and would like to inquire more."
  );

  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${presetMessage}`;

  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10 pb-30">
      <nav className="grid grid-col grid-cols-2 sm:grid-cols-5">
        <button
          className="link link-hover"
          onClick={() => handleAboutUsClick()}
        >
          About us
        </button>
        <button
          className="link link-hover"
          onClick={() => handleContactClick()}
        >
          Contact us
        </button>
        <button className="link link-hover" onClick={() => handleTermsClick()}>
          Terms & Conditions
        </button>
        <button
          className="link link-hover"
          onClick={() => handlePrivacyClick()}
        >
          Privacy policy
        </button>
        <button
          className="link link-hover"
          onClick={() => handleECatalogClick()}
        >
          E-catalog
        </button>
        {/* <button
          className="link link-hover"
          onClick={() => handleShowroomClick()}
        >
          Showroom
        </button> */}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" rel="noopener noreferrer" href={whatsappLink}>
            <img
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784180/whatsapp_4401461_ahnu6k.png'
              }
              alt=""
              className="size-10"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/pheezyhomes_interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <img
              src={
                'https://res.cloudinary.com/dqe64m85c/image/upload/v1753784195/ig_pvrgll.png'
              }
              alt=""
              className="size-10"
            />
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@em_furniture_nd_interior?is_from_webapp=1&sender_device=pc"
          >
            <img src={tiktok} alt="" className="size-10" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/___Emine_"
          >
            <img src={x} alt="" className="size-10 rounded-full" />
          </a> */}
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by EM
          PheezyHomesInteriors
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
