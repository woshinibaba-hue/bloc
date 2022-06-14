type keys = 'login_info' | 'user_token' | 'user'

class Storage {
  set(key: keys, value: any) {
    if (key) {
      const val = JSON.stringify(value)
      window.localStorage.setItem(key, val)
    }
  }

  get<T = any>(key: keys): T | null {
    if (key) {
      const val = window.localStorage.getItem(key)
      return val ? JSON.parse(val) : null
    }
    return null
  }

  remove(key: keys) {
    if (key) {
      window.localStorage.removeItem(key)
    }
  }

  clear() {
    window.localStorage.clear()
  }
}

export default new Storage()
