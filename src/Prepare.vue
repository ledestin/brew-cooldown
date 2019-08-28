<template>
  <div v-bind="$attrs">
    <h2 class="title">
      Pour water on leaves and
      <button
        class="button is-primary"
        @click="nextStep"
        :disabled="disableProgress"
      >
        Start Brewing
      </button>
    </h2>
    <img src="./assets/beverage-1869716_1920.jpg">
  </div>
</template>

<script>
  export default {
    name: 'prepare',
    props: {
      nextStep: Function,
      disableProgress: Boolean
    }
  }
</script>
