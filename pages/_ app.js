// 全てのページに読み込ませたいcssなどをここに記述
// https://www.youtube.com/watch?v=D-q8K7TCN6I&list=PLX8Rsrpnn3IUGEyanrHYGjY1WOzNe7Jd-&index=4


// `pages/_app.js`
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}