import Head from "next/head";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useEffect } from 'react';
import Link from "next/link";
import MenuButton from "../components/MenuButton";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    const cat = document.getElementById('cat');
    let position = 0;

    
    function moveCat() {
      if (cat) {
        position += 10;
        cat.style.left = position + 'px';

        if (position < window.innerWidth) {
            requestAnimationFrame(moveCat);
        }
    }

    moveCat();
    }
}, []);

  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Audhdities</title>
        <link rel="icon" href="/kp-logo.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 py-20">
      
      <div className="donate-buttons-container">
        <Link href="https://cash.app" target="_blank" rel="noopener noreferrer" className="menu-button2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl">
          Donate via Cash App
        </Link>
        <Link href="https://paypal.com" target="_blank" rel="noopener noreferrer" className="menu-button2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl">
          Donate via PayPal
        </Link>
      </div>
      <div className="grid">
        {["Urgent Rent Support", "Help Unite Our Family", "Save Our Vehicle", "General Family Support"].map((title, index) => (
            <Link key={index} href="/information" className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
                <h3 className="text-lg font-semibold p-4 block text-center">{title} &rarr;</h3>
                <p className="px-4 pb-4 block text-center">Click to read more about our story and how you can help.</p>
              </Link>
          ))}
        </div>
      </main>

      <footer className="w-full h-24 border-t border-gray-200 flex justify-center items-center">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo height-auto width-20"
        >
          Powered by{" "}
          <img src="/kp-logo.png" alt="KP Logo" className="logo" />
        </a>
      </footer>     
    </div>
  );
}
