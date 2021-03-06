import axios from 'axios'
import Auth from './auth'
//https://github.com/axios/axios

 const URL = 'http://localhost:4000'
const sendRequest = (config:any) => {
  config.baseURL = URL
  // get token from  Auth class   
  config.headers = {
    "authorization": Auth.getToken()
  }

  return new Promise((resolve, reject) => {

    axios(config).then((data:any) => {
      resolve(data)
    }).catch((e:any) => {
      console.log(e)
      if (e.response && e.response.status === 500 ) {
        // Auth.clearAll() // logout if token not valid Or token expired

      }
      else {
       
          reject(e)
        
      }

    })


  })



}
export default sendRequest