export class Auth {

  constructor(config, http) {
    this.config = config;
    this.http = http
  }

  async google(data) {
   const url = `${this.config.common.google.url}/auth/google/authenticate`
   return this.http.post(url, data)
  }

}
