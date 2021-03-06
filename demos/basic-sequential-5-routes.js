const sequential = require('../lib/router/sequential')
const cero = require('../index')

const { router, server } = cero({
  router: sequential()
})

router.on('GET', '/hi4', (req, res) => {
  res.end('Hello World!')
})

router.on('GET', '/hi3', (req, res) => {
  res.end('Hello World!')
})

router.on('GET', '/hi2', (req, res) => {
  res.end('Hello World!')
})

router.on('GET', '/hi1', (req, res) => {
  res.end('Hello World!')
})

router.on('GET', '/hi', (req, res) => {
  res.end('Hello World!')
})

server.listen(3000)
