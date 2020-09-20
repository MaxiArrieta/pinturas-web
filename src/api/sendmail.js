import { basePath } from "./config"

export function sendMailApi(nombre, telefono, email, mensaje) {
  const url = `${basePath}/send-mail`
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, telefono, email, mensaje }),
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
