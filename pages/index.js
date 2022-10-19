import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
// 参考：https://www.youtube.com/watch?v=h9wjVLwd2GQ&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=6
// 静的サイトジェネレーションにしたいなら、「getStaticProps」（内容はさほど変更にならない場合
// サーバーサイドレンダリングにしたいなら、「getServerSideProps」（内容が高頻度で変更になる場合
export async function getStaticProps() {
  // ブログに投稿されたデータを取得する
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          最初のページ。ここに自己紹介を入れるここに自己紹介を入れるここに自己紹介を入れるここに自己紹介を入れる
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* ブログ記事の出力 */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* 個々の記事をmapメソッドで取得 */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
