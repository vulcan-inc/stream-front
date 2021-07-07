import axios from 'axios'
import {baseUrl} from '../env'
let Axios = axios

Axios.defaults.baseURL = baseUrl

export default Axios