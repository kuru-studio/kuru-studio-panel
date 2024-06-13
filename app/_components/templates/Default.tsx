import Head from 'next/head';
import Organism from "@organism";
import Atom from "@atom";
import "../../_styles/globals.css";

const Default = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isLoggedIn = false;

  return (
    <html lang="en" className="h-full">
      <Head>
        <title>Kuru Studio Social</title>
        <meta name="description" content="Kuru Studio Social" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col h-full">
        <Atom.Visibility state={!isLoggedIn}>
          <Organism.Authenticate />
        </Atom.Visibility>
        <Atom.Visibility state={isLoggedIn}>
          <Organism.Wrapper>
            <Organism.Header />
            <div className="container mx-auto flex-1">{children}</div>
            <Organism.Footer />
          </Organism.Wrapper>
        </Atom.Visibility>
      </body>
    </html>
  );
}

export default Default;
