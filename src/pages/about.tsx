import Head from 'next/head';
import { useAppContent } from './_app';

const About = () => {
  const { content } = useAppContent();

  return (
    <>
      <Head>
        <title>Alan Eicker - About Me</title>
        <meta
          name="description"
          content="Alan Eicker: Full-Stack Developer, Interface Engineer, and Design Systems Evangelist with Design Experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Me</h1>
    </>
  );
};

export default About;
