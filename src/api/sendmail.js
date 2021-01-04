import { basePath } from "./config"

export function sendMailApi(nombre, telefono, email, mensaje, humanKey) {
  const url = `${basePath}/send-mail`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, telefono, email, mensaje, humanKey }),
  }

  return fetch(url, params)
    .then(response => {
      return response.json()
    })
    .then(result => {
      return result
    })
    .catch(error => {
      return error
    })
}
/*Error : Access to XMLHttpRequest at 'http://localhost:63855/socket.io/?EIO=3&transport=polling&t=NIjgir9'
 from origin 'http://localhost:8000' has been blocked by CORS policy:
 The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*'
 when the request's credentials mode is 'include'.
The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.*/

/*Otro error: Access to fetch at 'https://backend-sendmail.herokuapp.com/api/send-mail'
from origin 'http://localhost:8000' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check: It does not have HTTP ok status.*/
