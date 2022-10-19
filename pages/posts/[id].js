import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date';

import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts'

// 参考：https://www.youtube.com/watch?v=x0ayN-ysbsI&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=7
// 投稿のURLを生成する
export async function getStaticPaths() {
  // サーバーサイドのコードの実行
  const paths = getAllPostIds()
  return {
    paths,
    // 指定path以外のurlならば404を返すのがfallback
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // サーバーサイドのコードの実行
  // [id].jsの場合
  const postData = await getPostData(params.id)
  // [...id].jsの場合  （階層構造が深いcatch-all Routesのための変更）
  // const postData = await getPostData(params.id.join('/'))
  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
