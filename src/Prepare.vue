<template>
  <div v-bind="$attrs">
    <h2 class="title">Pour water on leaves and <button class="button is-primary" @click="nextStep">Start Brewing</button></h2>
    <img src="./assets/rene-pollock-VXIOMNlnSos-unsplash.jpg" style="width: 400px; height: 400px">
  </div>
</template>

<script>
  export default {
    name: 'prepare',
    props: {
      nextStep: Function
    }
  }
</script>
