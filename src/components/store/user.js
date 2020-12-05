import { observable } from '../mobx'

export const userStore = {
  user: observable({
    name: ''
  }),
  setName(name) {
    this.user.name = name
  }
}