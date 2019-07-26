<template>
  <div>
    <div v-if="status === 'brewing'">
      <h1 class="title">Brewing...</h1>
      <img src="./assets/nathan-dumlao-vJY0GVb1SaA-unsplash.jpg">
    </div>
    <div v-else-if="status === 'removeLeaves'">
      <h1 class="title">Please remove leaves/beans and
        <button class="button is-primary" @click="startCooling">proceed to cooling</button>
      </h1>
      <img src="./assets/stock-photo-glass-filter-kettle-451220128.jpg">
    </div>
    <div v-else-if="status === 'cooling'">
      <h1 class="title">Cooling down...</h1>
      <img src="./assets/chinese-tea-2651717_1920.jpg">
    </div>
    <div v-else-if="status === 'ready'">
      <h1 class="title"><button class="button is-primary">Stop the bell</button> and enjoy your drink</h1>
      <img src="./assets/bibarys-ibatolla-Mq0jFE_HDJc-unsplash.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'brew',
    data () {
      return {
        status: "brewing"
      }
    },
    methods: {
      startCooling() {
        this.status = "cooling"

        setTimeout(() => {
          this.status = "ready"
        }, 3000)
      }
    },
    mounted() {
      setTimeout(() => {
        this.status = "removeLeaves"
      }, 3000)
    }
  }
</script>
