const listeners = []

export function onUpdate(fn) {
  listeners.push(fn)
}

function runUpdaters() {
  setTimeout(() => {
    listeners.forEach(fn => fn())
  }, 0)
}

export function observable(obj) {
  return new Proxy(obj, {
    set(target, name, value) {      
      target[name] = value
      runUpdaters()
      return true
    }
  })
}