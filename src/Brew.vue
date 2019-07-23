<template>
  <div>
    <div v-if="status === 'brewing'">
      <h1>Brewing...</h1>
      <img src="./assets/nathan-dumlao-vJY0GVb1SaA-unsplash.jpg" style="width: 400px; height: 400px">
    </div>
    <div v-else-if="status === 'removeLeaves'">
      <h1>Please remove leaves/beans and
        <button class="button" @click="startCooling">proceed to cooling</button>
      </h1>
      <img src="./assets/stock-photo-glass-filter-kettle-451220128.jpg" style="width: 400px; height: auto">
    </div>
    <div v-else-if="status === 'cooling'">
      <h1>Cooling down...</h1>
      <img src="./assets/thought-catalog-OJZB0VUQKKc-unsplash.jpg" style="width: 400px; height: auto">
    </div>
    <div v-else-if="status === 'ready'">
      <h1><button>Stop the bell</button> and enjoy your drink</h1>
      <img src="./assets/bibarys-ibatolla-Mq0jFE_HDJc-unsplash.jpg" style="width: 400px; height: auto">
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
