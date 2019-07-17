<template>
  <div>
    <h1>Pour water on leaves and <button @click="nextStep" >Start Brewing</button></h1>
    <img src="./assets/oriento-SSj5qtnrpj0-unsplash.jpg" style="width: 400px; height: 400px">
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
