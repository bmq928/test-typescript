import { Router } from 'express'

const router = Router()

router.post('/login', async (req, res) => {
  res.send({kame: 'mae'})
})

export default router