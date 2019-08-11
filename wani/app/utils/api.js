import { getApiKey } from './ApiKey'

const apiKey = getApiKey()

export function getProfile (username) {
  return fetch(`https://www.wanikani.com/api/user/${apiKey}/user-information`)
    .then((res) => res.json())
    .then((result) => {
      return result.user_information
    })
}