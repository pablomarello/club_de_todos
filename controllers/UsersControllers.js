import UsersDaoMemory from '../db/daos/UsersDaoMemory.js';
import UsersDaoMysql from '../db/daos/UsersDaoMysql.js';
import UsersHelpers from "../helpers/UsersHelpers.js"


export default class UsersControllers {
  constructor() {
    // this.db = UsersDaoMemory();
    this.db = new UsersDaoMysql();
    this.helpers = new UsersHelpers();
  }
  getAllUsers = async (_, res) => {
    const users = await this.db.getAllUsers()
    res.json(users)
  }
  createUser = async (req, res) => {
    const user = this.helpers.parseUser(req.body)
    const result = await this.db.createUser(user)
    res.json(result)
  }
  updateUser = async (req, res) => {
    const user = this.helpers.parseUser(req.body)
    const result = await this.db.updateUser(user)
    res.json(result)
  }
  deleteUser = async (req, res) => {
    const {id} = req.params
    const result = await this.db.deleteUser(id)
    res.json(result)
  }
}