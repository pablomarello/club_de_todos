import usersMock from '../mocks/users.mock.js'


export default class UsersDaoMemory {

  constructor() {
    this.users = usersMock;
  }

  getAllUsers(){
    return this.users
  }
  createUser(user) {
    this.push(user)
    return user
  }
  updateUser(data) {
    let modifiedUser = null
    this.users = this.users.map(user =>{
      if(user.id === data.id){
        user = data
        modifiedUser = user
      }
      return user
    })
    return modifiedUser
  }
  deleteUser() {
    let oldLength = this.users.length
    this.users = this.users.filter(user =>
      user.id !== parseInt(id))
    return oldLength !== this.users.length
  }

}