import Router from 'koa-router'
import { mockProducts } from './mockData'

const router = new Router()

router.get('/getProducts', async ctx => {
  ctx.body = JSON.stringify(mockProducts)
})

export default router
