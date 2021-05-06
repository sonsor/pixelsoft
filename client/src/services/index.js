import config from '../config';
import {Http} from '../utils/http';
import {Auth} from './auth';


const http = new Http();
const auth = new Auth(config, http)

export default {
  auth
}

