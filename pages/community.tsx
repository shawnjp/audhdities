import React from 'react';
import Link from 'next/link';

const CommunitySupport: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto p-5 align-items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Join Our Community Support Initiative</h1>
      <p className="text-lg mb-4">
        In November of 2022, a life-changing event occurred when I discovered that I have a 23-year-old daughter, whom I had never known existed. Her mother passed away when she was less than a year old, and she has faced a very challenging journey filled with hardships.
      </p>
      <p className="text-lg mb-4">
        This discovery coincided with both my wife and I learning about our own autism. These revelations have not only explained many of the challenges we've faced but also highlighted the importance of community support in navigating life's complexities.
      </p>
      <p className="text-lg mb-4">
        We are reaching out to build a community that understands and supports each other, especially those who are discovering their neurodivergence later in life. This community aims to provide a safe space for learning about our challenges and how we can best support one another.
      </p>
      <p className="text-lg mb-4">
        If you are unable to donate, you can still make a significant impact by spreading the word and helping us grow this community. Every share, every conversation, and every bit of support counts towards building a more understanding and inclusive world.
      </p>
      <div className="text-center mt-6">
        <Link href="/donate" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate to Support Us</Link>
        <p className="mt-4 text-lg italic">Or help by sharing our story and joining our community efforts.</p>
      </div>
    </div>
  );
};

export default CommunitySupport;