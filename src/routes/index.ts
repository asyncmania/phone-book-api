import { Router } from 'express'
import contactRoutes from './contactRoutes'
import usersRoutes from './usersRoutes'


export default (): Router => {
  const router = Router()
  usersRoutes(router)
  contactRoutes(router)
  return router
}