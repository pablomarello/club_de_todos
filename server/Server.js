import express from 'express'
import UserRoutes from '../routes/UsersRoutes.js';


export default class Server {

  static app = express()

  static middlewares() {
    Server.app.use(express.json())
    Server.app.use(express.urlencoded({extended: true}))
  }

  static routes() {
    const userRoutes = new UserRoutes()
    Server.app.use('/users', userRoutes.router)
  }

  static runServer(port){
    Server.app.listen(port, () =>
    console.log(`listen at http://localhost:${port}`))
  }

  static run(port){
    Server.middlewares();
    Server.routes();
    Server.runServer(port);
  }
}