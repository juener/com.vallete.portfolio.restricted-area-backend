import { FastifyInstance } from 'fastify'
import { registerController } from './controllers/register'
import { authenticateController } from './controllers/authenticate'
import { profileController } from './controllers/profile'
import { verifyJwt } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
  app.post('/session', authenticateController)

  // must be authenticated
  app.get('/me', { onRequest: [verifyJwt] }, profileController)
}
