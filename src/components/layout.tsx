// IMPORTS
import { ReactNode } from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen backdrop-blur-md">
      <Head>
        <title>TangoLive Coins</title>
      </Head>
      <div className="container max-w-2xl mx-auto px-6 py-16 lg:py-36">
        {children}
      </div>
    </div>
  );
}
