import { Router } from 'express'
import usersRoutes from './usersRoutes'


export default (): Router => {
  const router = Router()
  usersRoutes(router)
  return router
}