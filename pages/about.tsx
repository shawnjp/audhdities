import React, { useState } from 'react';
import Image from 'next/image';
import kpLogo from '../public/kp-logo.png';

const AboutPage: React.FC = () => {
    const [clickedCard, setClickedCard] = useState<number | null>(null);
  
    const handleCardClick = (index: number) => {
      setClickedCard(index);
    };
    return (
      <div className="container mx-auto px-4 py-8 flex">
        <div className="relative">
          <Image src={kpLogo} alt="KP Logo" width={100} height={100} className="absolute left-0 top-0" />
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 transform transition duration-500 hover:scale-105 ml-24">
          <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">About Me</h1>
          <div className="grid2">
            {[
              "Hello, I'm Shawn. My journey has been deeply influenced by my experiences as an autistic individual, a musician, artist, and technologist. I've navigated through personal and professional challenges that have shaped my vision and now, I am embarking on a mission to unite and support my family through technology.",
              "My career has spanned various roles, from managing tech kiosks to working with Adobe, where I've honed my skills in software, data, and pattern recognition. Despite health challenges and financial hardships, I remain committed to my goals. I am currently developing an app designed to help autistic individuals like myself and my family manage their lives according to their values and needs.",
              "This project is not just a business; it's a personal mission to create a tool free from ads and data selling, respecting user privacy and offering value directly to our community. To support this cause and secure our future, I am initiating a fundraising marathon through streaming. Your support can make a significant difference in our lives and help launch a platform that empowers the autistic community.",
              "Join me as I stream and fumble my way through app development, guided by AI, making mistakes and learning publicly. This journey is also a personal one, sharing my story of discovering my autism later in life and uniting with my daughter and her partner, who are also on the spectrum and currently unemployed."
            ].map((text, index) => (
              <div
                key={index}
                className={`card2 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200 cursor-pointer ${clickedCard === index ? 'bg-yellow-100' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <p className={`text-lg leading-relaxed mb-4 text-gray-700 ${clickedCard === index ? 'font-bold' : ''}`}>
                  {text}
                </p>
              </div>
            ))}
            <div className="text-center">
              <a href="/fundraiserinfo" className="menu-button bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Support My Fundraiser
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AboutPage;