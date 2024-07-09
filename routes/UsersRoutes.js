import UsersControllers from "../controllers/UsersControllers.js";
import Routes from "./Routes.js";

export default class UserRoutes extends Routes {

  constructor(){
    super()
    this.controller = new UsersControllers();
    this.getRoutes()
    
  }

  getRoutes(){
    this.router
          .get('/', this.controller.getAllUsers)
          .post('/', this.controller.createUser)
          .put('/', this.controller.updateUser)
          .delete('/:id', this.controller.deleteUser)
  }
}