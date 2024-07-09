import mysql from 'mysql2'

export default class Mysql {

  constructor(){
    this.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '15409892',
    port: 3306,
    database: 'club_de_todos'


    })

    this.connection.connect(err => 
      err ? console.log('no se pudo conectar con la db') 
          : console.log('conectado a la db club_de_todos')
    )
  }
}