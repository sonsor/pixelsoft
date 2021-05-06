import axios from "axios";
import {
  tokenInterceptor,
  successInterceptor,
  errorInterceptor,
} from "./interceptor";
import config from "../config";

class Http {
  constructor() {
    this.mock = null;
    // this.enable()
    this.instance = axios.create();
    this.instance.interceptors.request.use(tokenInterceptor);
    this.instance.interceptors.response.use(
      (response) => {
        successInterceptor(response);
        return response;
      },
      (error) => {
        errorInterceptor(error);
        return Promise.reject({ ...error });
      }
    );
  }

  get(url, conf = {}) {
    return this.instance
          .get(url, conf)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.instance
      .delete(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.instance
      .head(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.instance
      .options(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.instance
          .post(url, data, conf)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.instance
          .put(url, data, conf)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.instance
      .patch(url, data, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}

export { Http };
