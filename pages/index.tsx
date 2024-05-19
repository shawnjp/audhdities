import Head from "next/head";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useEffect } from 'react';

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

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

        <div className="grid">
        <div className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
          <h3 className="text-lg font-semibold p-4 block text-center">Urgent Rent Support &rarr;</h3>
          <p className="px-4 pb-4 block text-center">Help us avoid eviction by contributing towards our rent.</p>
          <a href="https://cash.app/$jessicalynne10?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via Cash App</a>
          <a href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via PayPal</a>
        </div>

        <div className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
          <h3 className="text-lg font-semibold p-4 block text-center">Help Unite Our Family &rarr;</h3>
          <p className="px-4 pb-4 block text-center">Support us in moving closer to our daughter and her partner.</p>
          <a href="https://cash.app/$jessicalynne10?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via Cash App</a>
          <a href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via PayPal</a>
        </div>

        <div className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
          <h3 className="text-lg font-semibold p-4 block text-center">Save Our Vehicle &rarr;</h3>
          <p className="px-4 pb-4 block text-center">Contribute to prevent the repossession of our car, essential for our daily needs.</p>
          <a href="https://cash.app/$jessicalynne10?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via Cash App</a>
          <a href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via PayPal</a>
        </div>

        <div className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
          <h3 className="text-lg font-semibold p-4 block text-center">General Family Support &rarr;</h3>
          <p className="px-4 pb-4 block text-center">Assist us with general expenses to keep our household running.</p>
          <a href="https://cash.app/$jessicalynne10?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via Cash App</a>
          <a href="https://www.paypal.me/Tjdpoetry?text=AudhditiesSupport" className="block text-center text-blue-500 hover:underline p-4">Donate via PayPal</a>
        </div>
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
