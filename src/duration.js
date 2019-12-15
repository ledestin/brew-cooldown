import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"
momentDurationFormatSetup(moment)

export default {
  durationToSeconds(duration) {
    const [minutes, seconds] = duration.split(':')
    return moment.duration({ minutes, seconds }).asSeconds()
  },
  secondsToDuration(seconds) {
    return moment.duration({ seconds }).format()
  }
}
