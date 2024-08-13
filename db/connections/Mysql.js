import mysql from 'mysql2'

export default class Mysql {

  constructor(){
    this.connection = mysql.createConnection({
    host: process.env.HOST_DB || 'localhost',
    user: process.env.USER_DB || 'root',
    password: process.env.PASS_DB || '',
    port: 3306,
    database: process.env.DB || 'club_de_todos'


    })

    this.connection.connect(err => 
      err ? console.log('no se pudo conectar con la db') 
          : console.log('conectado a la db club_de_todos')
    )
  }
}
