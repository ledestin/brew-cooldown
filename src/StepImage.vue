<template>
  <picture>
    <source :srcset="webpImage" type="image/webp">
    <source :srcset="legacyImage" type="image/jpeg">
    <img :src="legacyImage" class="stepDescribingImage" v-bind="$attrs">
  </picture>
</template>

<script>
  export default {
    props: {
      image: String
    },
    computed: {
      legacyImage() {
        return this.getImgUrl(this.image)
      },
      webpImage() {
        return this.getImgUrl(this.deduceWebpImagePath())
      }
    },
    methods: {
      deduceWebpImagePath() {
        return this.image.replace(".jpg", ".webp")
      },
      getImgUrl(image) {
        return require('./assets/' + image)
      }
    }
  }
</script>
