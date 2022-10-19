export default (req, res) => {
  const {
    query: {pid},
  } = req
  // 以下と意味は同じ
  //const pid = req.query.pid

  res.end(`Post: ${pid}`)
}

// 上記と同じ意味
// export default function handler(req, res) {
//   const { pid } = req.query
//   res.end(`Post: ${pid}`)
// }

// 参考：https://nextjs.org/docs/api-routes/dynamic-api-routes

