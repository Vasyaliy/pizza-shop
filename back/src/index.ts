import http from 'http'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import cors from '@koa/cors'

import router from './router'

const app = new Koa()
app.use(compress())
app.use(bodyParser())
app.use(cors())

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(router.allowedMethods())

const httpServer = http.createServer(app.callback())
httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Server is started at http://localhost:3000')
})
