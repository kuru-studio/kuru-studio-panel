'use client';
import Head from 'next/head';
import "../../_styles/globals.css";
import { redirect } from 'next/navigation';
import authenticate from "@/app/_utilities/authenticate";

const Authenticate = ({ children }) => {
  const { token, loading } = authenticate();

  if (token && !loading) {
    redirect('/dashboard');
  }

  return (
    <html lang="en" className="h-full">
      <Head>
        <title>Kuru Studio Panel</title>
        <meta name="description" content="Kuru Studio Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex h-screen w-screen">
        {children}
      </body>
    </html>
  );
}

export default Authenticate;
