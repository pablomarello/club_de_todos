import Mysql from "../connections/Mysql.js";

export default class UsersDaoMysql extends Mysql {
  constructor(){
    super()
    this.table = 'users'
    // this.#createTable()
  }

  // #createTable(){
  //   const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
  //     id INT PRIMARY KEY,
  //     name VARCHAR(100) NOT NULL,
  //     age INT NOT NULL
  //   )`
  //   this.connection.query(query)
  // }

  async getAllUsers(){
    const query = `SELECT * FROM ${this.table}`
    const [result] = await this.connection.promise().query(query)
    return result
  } 
  async createUser(user) {
    const {idUsers, email, clave, nombre, apellido, id_rolIndice, id_deporteIndice} = user
    const query = `INSERT INTO ${this.table} VALUES(${idUsers}, '${email}',' ${clave}', '${nombre}', '${apellido}', ${id_rolIndice}, ${id_deporteIndice})`
    const [result] = await this.connection.promise().query(query)
    return result
  }
  async updateUser(user) {
    const {idUsers, email, clave, nombre, apellido, id_rolIndice, id_deporteIndice} = user
    const query = `UPDATE ${this.table} SET email= ?, clave= ?, nombre= ?, apellido= ?, id_rolIndice= ?, id_deporteIndice= ? WHERE idUsers= ?`
    const [result] = await this.connection.promise().query(query, [email, clave, nombre, apellido, id_rolIndice, id_deporteIndice, idUsers])
    return result
  }
  async deleteUser(idUsers) {
   const query = `DELETE FROM ${this.table} WHERE idUsers = ${idUsers}`
   const [result] = await this.connection.promise().query(query)
   return result
  }
}