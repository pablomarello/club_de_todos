export default class User {
  constructor(idUsers, email, clave, nombre, apellido, id_rolIndice, id_deporteIndice) {
    this.idUsers = idUsers
    this.email = email
    this.clave = clave
    this.nombre = nombre
    this.apellido = apellido
    this.id_rolIndice = id_rolIndice
    this.id_deporteIndice = id_deporteIndice
  }
}