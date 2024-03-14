import Head from 'next/head';
import withLayout from '../hocs/WithLayout';
import { useAppContent } from './_app';

const Home = () => {
  const { content } = useAppContent();

  return (
    <>
      <Head>
        <title>Alan Eicker - Front End Engineer</title>
        <meta
          name="description"
          content="Alan Eicker: Full-Stack Developer, Interface Engineer, and Design Systems Evangelist with Design Experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </>
  );
};

export default withLayout(Home);
