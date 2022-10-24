import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <Head>
        <title>{`${username}'s main page`}</title>
        <meta name='description' content={`${username}'s main page`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>{`${username}'s dev index`}</h1>
      </main>
    </div>
  );
};

export default Home;
