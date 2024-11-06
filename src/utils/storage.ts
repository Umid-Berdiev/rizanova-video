let prefix = '_rizanova_'

const tryParseJSON = (jsonString: string) => {
  try {
    var o = JSON.parse(jsonString)

    if (o && typeof o === 'object') {
      return o
    }
  } catch (e) {}

  return jsonString
}

export const storeData = (key: string, value: string) => {
  try {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }

    localStorage.setItem(prefix + key, value)
  } catch (ex) {}
}

export const getData = (key: string) => {
  try {
    let value = localStorage.getItem(prefix + key)

    if (value === null) {
      return null
    }

    return tryParseJSON(value)
  } catch (ex) {
    return null
  }
}

export const removeData = (key: string) => {
  localStorage.removeItem(prefix + key)
}
