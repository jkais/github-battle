import ls from 'local-storage'

export function getApiKey () {
  return ls.get('key')
}

export function setApiKey (key) {
  ls.set('key', key)
}

export function resetApiKey () {
  ls.remove('key')
}
