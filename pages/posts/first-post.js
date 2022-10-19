import Head from 'next/head';
import Link from 'next/link';
// cssの読み込み（layoutタグで囲む
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>ひらのFirst Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}