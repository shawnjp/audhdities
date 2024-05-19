import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 transform transition duration-500 hover:scale-105">
            <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">About Me</h1>
            <div className="grid2">
            <div className="card2 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Hello, I'm <span className="font-semibold text-purple-600">Shawn</span>. My journey has been deeply influenced by my experiences as an autistic individual, a musician, artist, and technologist. I've navigated through personal and professional challenges that have shaped my vision and now, I am embarking on a mission to unite and support my family through technology.
              </p>
            </div>
            <div className="card2 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                My career has spanned various roles, from managing tech kiosks to working with Adobe, where I've honed my skills in software, data, and pattern recognition. Despite health challenges and financial hardships, I remain committed to my goals. I am currently developing an app designed to help autistic individuals like myself and my family manage their lives according to their values and needs.
              </p>
            </div>
            <div className="card2 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                This project is not just a business; it's a personal mission to create a tool free from ads and data selling, respecting user privacy and offering value directly to our community. To support this cause and secure our future, I am initiating a fundraising marathon through streaming. Your support can make a significant difference in our lives and help launch a platform that empowers the autistic community.
              </p>
            </div>
            <div className="card2 bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Join me as I stream and fumble my way through app development, guided by AI, making mistakes and learning publicly. This journey is also a personal one, sharing my story of discovering my autism later in life and uniting with my daughter and her partner, who are also on the spectrum and currently unemployed.
              </p>
            </div>
            <div className="text-center">
              <a href="/fundraiserinfo" className="menu-buttun bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Support My Fundraiser
              </a>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default AboutPage;