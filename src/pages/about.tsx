import Head from 'next/head';
import { AboutProps } from 'interfaces/AppContent';

const About = ({ title, content }: AboutProps) => {
  const numYearsExperience = String(new Date().getFullYear() - 2007);

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
      <h1>{title}</h1>
      <p>{content.replace(/@years/g, numYearsExperience)}</p>
    </>
  );
};

export default About;
