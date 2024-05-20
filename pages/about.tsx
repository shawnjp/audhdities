import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-purple-800">About Me</h1>
      <p className="text-xl leading-relaxed mb-6 text-gray-800 font-medium">
        Hello, I'm Shawn. My journey has been deeply influenced by my experiences as an autistic individual, a musician, artist, and technologist. I've navigated through personal and professional challenges that have shaped my vision and now, I am embarking on a mission to unite and support my family through technology.
      </p>
      <p className="text-xl leading-relaxed mb-6 text-gray-800 font-medium">
        My career has spanned various roles, from managing tech kiosks to working with Adobe, where I've honed my skills in software, data, and pattern recognition. Despite health challenges and financial hardships, I remain committed to my goals. I am currently developing an app designed to help autistic individuals like myself and my family manage their lives according to their values and needs.
      </p>
      <p className="text-xl leading-relaxed mb-6 text-gray-800 font-medium">
        This project is not just a business; it's a personal mission to create a tool free from ads and data selling, respecting user privacy and offering value directly to our community. To support this cause and secure our future, I am initiating a fundraising marathon through streaming. Your support can make a significant difference in our lives and help launch a platform that empowers the autistic community.
      </p>
      <p className="text-xl leading-relaxed mb-6 text-gray-800 font-medium">
        Join me as I stream and fumble my way through app development, guided by AI, making mistakes and learning publicly. This journey is also a personal one, sharing my story of discovering my autism later in life and uniting with my daughter and her partner, who are also on the spectrum and currently unemployed.
      </p>
      <div className="text-center mt-10">
        <a href="/fundraiserinfo" className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
          Support My Fundraiser
        </a>
      </div>
    </div>
  );
};

export default AboutPage;