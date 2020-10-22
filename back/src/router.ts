import Router from 'koa-router'
import { mockProducts } from './mockData'

const router = new Router()

router.get('/getProducts', async ctx => {
  ctx.body = JSON.stringify(mockProducts)
})

router.get('/order', async ctx => {
  const order = ctx.request.body
  console.log(order)
  ctx.body = 'succes'
})

export default router
