const baseUrl = 'http://localhost:3000/api/v1'

export default class AuthAdaptor {
  static login (loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${baseUrl}/me`, {
      headers: headers()
    }).then(res => res.json())
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
