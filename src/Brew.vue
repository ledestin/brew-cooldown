<template>
  <div>
    <audio ref="SingleBell" loop>
      <source
        src="./assets/sounds/415510__inspectorj__bell-counter-a.mp3"
        type="audio/mp3"
      />
    </audio>
    <audio ref="Bells" loop>
      <source
        src="./assets/sounds/68981__abel-k__copper-bell.mp3"
        type="audio/mp3"
      />
    </audio>

    <div v-if="status === 'brewing'">
      <h1 class="title">Brewing...</h1>
      <img src="./assets/nathan-dumlao-vJY0GVb1SaA-unsplash.jpg">
    </div>
    <div v-else-if="status === 'removeLeaves'">
      <h1 class="title">Separate leaves and brew and
        <button class="button is-primary" @click="startCooling">proceed to cooling</button>
      </h1>
      <img src="./assets/afternoon-beverage-break-1549706.jpg">
    </div>
    <div v-else-if="status === 'cooling'">
      <h1 class="title">Cooling down...</h1>
      <img src="./assets/chinese-tea-2651717_1920.jpg">
    </div>
    <div v-else-if="status === 'ready'">
      <h1 class="title">
        <button
          @click="enjoyYourDrink"
          class="button is-primary">Stop the bell
        </button>
        and enjoy your drink
      </h1>
      <img src="./assets/bibarys-ibatolla-Mq0jFE_HDJc-unsplash.jpg">
    </div>
    <div v-else-if="status === 'drinking'">
      <h1 class="title">
        After you've finished
        <button
          @click="prepareNewBrew"
          class="button is-primary">Prepare a new brew
        </button>
      </h1>

      <img src="./assets/bibarys-ibatolla-Mq0jFE_HDJc-unsplash.jpg">
    </div>
  </div>
</template>

<script>
  import webNotification from "simple-web-notification"

  export default {
    name: 'brew',
    props: {
      prepareNewBrew: Function,
      brewForSeconds: Number,
      cooldownForSeconds: Number
    },
    data () {
      return {
        status: "brewing"
      }
    },
    methods: {
      enjoyYourDrink() {
        if (this.status !== "ready")
          return

        this.stopSingleBell()
        this.status = "drinking"
      },
      startCooling() {
        if (this.status !== "removeLeaves")
          return

        this.stopBells()
        this.status = "cooling"
      },
      playBells() {
        this.$refs.Bells.play()
      },
      stopBells() {
        this.$refs.Bells.pause()
        this.$refs.Bells.currentTime = 0
      },
      playSingleBell() {
        this.$refs.SingleBell.play()
      },
      stopSingleBell() {
        this.$refs.SingleBell.pause()
        this.$refs.SingleBell.currentTime = 0
      },
      showNotification(message, body, onClick) {
        webNotification.showNotification(message, {
          body,
          onClick,
          icon: "/static/android-icon-192x192.png",
        })
      },
      showRemoveLeavesNotification() {
        this.showNotification("Brewing is over",
          "Separate leaves and the brew",
          () => this.startCooling()
        )
      },
      showDrinkIsReadyNotification() {
        this.showNotification("Your drink is ready", "Enjoy!",
          () => this.enjoyYourDrink()
        )
      }
    },
    mounted() {
      setTimeout(() => {
        this.playBells()
        this.status = "removeLeaves"
        this.showRemoveLeavesNotification()
      }, this.brewForSeconds * 1000)

      setTimeout(() => {
        this.status = "ready"
        this.stopBells()
        this.playSingleBell()
        this.showDrinkIsReadyNotification()
      }, this.cooldownForSeconds * 1000)
    }
  }
</script>
