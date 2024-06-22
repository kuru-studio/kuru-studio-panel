'use client';
import Head from 'next/head';
import Organism from "@organism";
import "../../_styles/globals.css";
import { redirect } from 'next/navigation';
import authenticate from "@/app/_utilities/authenticate";

const Default = ({ children }) => {
  const { token, loading } = authenticate();

  if (!token && !loading) {
    redirect('/authenticate');
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
        <Organism.Wrapper>
          <Organism.Sidebar />
          <div className="flex flex-col h-screen flex-1 bg-gray-100">
            <div className="flex-1">{children}</div>
            <Organism.Footer />
          </div>
        </Organism.Wrapper>
      </body>
    </html>
  );
}

export default Default;
