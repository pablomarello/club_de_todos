import User from "../models/User.js"

export default class UsersHelpers {
  parseUser(data){
    const {idUsers, email, clave, nombre, apellido, id_rolIndice} = data
    const user = new User(parseInt(idUsers), email, clave, nombre, apellido, parseInt(id_rolIndice))
    return user
  }
}