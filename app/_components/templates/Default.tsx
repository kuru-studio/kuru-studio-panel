'use client';
import Head from 'next/head';
import Organism from "@organism";
import Atom from "@atom";
import "../../_styles/globals.css";
import authenticate from "@/app/_utilities/authenticate";

const Default = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { token } = authenticate();
  const isLoggedIn = !!(token);

  return (
    <html lang="en" className="h-full">
      <Head>
        <title>Kuru Studio Panel</title>
        <meta name="description" content="Kuru Studio Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex h-screen w-screen">
        <Atom.Visibility state={!isLoggedIn}>
          <Organism.Authenticate />
        </Atom.Visibility>
        <Atom.Visibility state={isLoggedIn}>
          <Organism.Wrapper>
            <Organism.Header />
            <div className="flex flex-col h-screen flex-1 bg-gray-100">
              <div className="flex-1">{children}</div>
              <Organism.Footer />
            </div>
          </Organism.Wrapper>
        </Atom.Visibility>
      </body>
    </html>
  );
}

export default Default;
