import './globals.css';
import type { AppProps } from 'next/app';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import MenuButton from '../components/MenuButton';
import { useState } from 'react';

const publicPages = ['/sign-in', '/sign-up'];
import Image from 'next/image';
import kpLogo from '../public/kp-logo.png';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { pathname } = useRouter();
  return (

    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
    <div className="relative">
        <Image src={kpLogo} alt="KP Logo"className="logo2 absolute left-0 top-0" />
    </div>
      <MenuButton toggleSidebar={toggleSidebar} />
      <Layout isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        {publicPages.includes(pathname) ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </Layout>
    </ClerkProvider>
  );
}

export default MyApp;