import { onUpdate } from './index'

const observedComponents = []

onUpdate(() => {
  observedComponents.forEach((cm) => cm.forceUpdate())
})

export function observer(component) {
  return class extends component {
    constructor(props) {
      super(props)
      observedComponents.push(this)
    }
  }
}