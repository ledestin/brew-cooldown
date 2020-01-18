import webNotification from "simple-web-notification"

const webNotificationProxy = new Proxy(webNotification, {
  requestPermission: webNotification.requestPermission.bind(this, () => {}),

  get(target, name) {
    if (this.hasOwnProperty(name)) {
      return this[name]
    }

    return target[name]
  }
})

export default webNotificationProxy
