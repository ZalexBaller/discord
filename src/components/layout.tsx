// IMPORTS
import { ReactNode } from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Discord Nitro</title>
        <meta name="theme-color" content="#5865f2" />
        <link rel="icon" type="image/x-icon" href="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png" />
      </Head>
      <div className="container max-w-2xl mx-auto px-6 py-16 lg:py-36">
        {children}
      </div>
    </div>
  );
}
