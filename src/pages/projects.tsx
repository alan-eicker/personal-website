import Head from 'next/head';
import { useAppContent } from './_app';

export default function Home() {
  const { content } = useAppContent();

  return (
    <>
      <Head>
        <title>Alan Eicker - Projects</title>
        <meta
          name="description"
          content="Alan Eicker: Full-Stack Developer, Interface Engineer, and Design Systems Evangelist with Design Experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Projects</h1>
      </main>
    </>
  );
}
