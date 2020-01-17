import webNotification from "simple-web-notification"

const webNotificationProxy = new Proxy(webNotification, {
  requestPermission: webNotification.requestPermission.bind(this, () => {}),

  get(target, name) {
    if (name in this) {
      return this[name]
    }

    return target.get(name)
  }
})

export default webNotificationProxy
