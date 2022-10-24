import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const { username, slug } = router.query;

  return (
    <div>
      <Head>
        <title>{`${username}'s main page`}</title>
        <meta name='description' content={`${username}'s main page`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>{`${username}'s main page`}</h1>
        <h2>{`${username}'s ${slug} dev post`}</h2>
      </main>
    </div>
  );
};

export default Home;
