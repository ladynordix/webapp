import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

class UserStore {
  api = new ApiService()

  data = {}
  message = ''

  clearMessage() {
    this.message = ''
  }

  async login() {
    let response = {}

    try {
      response = await this.api.authenticateUser( this.data )

      this.message = response.token ? '' :
        response.msg || 'An error occurred.'
    } catch (error) {
      response = { error }

      this.message = 'Request failed. Please try again later.'
    }

    return response
  }
}

decorate( UserStore, {
  data: observable,
  message: observable
})

export default UserStore