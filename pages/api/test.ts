const handler = (req, res) => {
  const { statusCode, method } = req
  res.status(200).json({
    message: 'ok',
    statusCode,
    method,
  })
}

export default handler
