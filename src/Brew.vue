<template>
  <div>
    <audio ref="SingleBell" loop>
      <source
        src="./assets/sounds/415510__inspectorj__bell-counter-a.wav"
        type="audio/wav"
      />
    </audio>
    <audio ref="Bells" loop>
      <source
        src="./assets/sounds/68981__abel-k__copper-bell.wav"
        type="audio/wav"
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
      <img src="./assets/stock-photo-glass-filter-kettle-451220128.jpg">
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
        this.stopSingleBell()
        this.status = "drinking"
      },
      startCooling() {
        this.stopBells()
        this.status = "cooling"

        setTimeout(() => {
          this.status = "ready"
          this.playSingleBell()
        }, this.cooldownForSeconds * 1000)
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
      }
    },
    mounted() {
      setTimeout(() => {
        this.playBells()
        this.status = "removeLeaves"
      }, this.brewForSeconds * 1000)
    }
  }
</script>
