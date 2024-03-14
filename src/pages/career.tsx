import Head from 'next/head';
import { CareerProps } from 'interfaces/AppContent';

const Career = ({ title, text, resumeLink, jobHistory }: CareerProps) => {
  return (
    <>
      <Head>
        <title>Alan Eicker - Career</title>
        <meta
          name="description"
          content="Alan Eicker: Full-Stack Developer, Interface Engineer, and Design Systems Evangelist with Design Experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{JSON.stringify(resumeLink)}</p>
      <p>{JSON.stringify(jobHistory)}</p>
    </>
  );
};

export default Career;
