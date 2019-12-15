<template>
  <div class="field">
    <label :for="id" class="label">{{ label }}</label>
    <div class="control">
      <vue-regex-input
        :id="id"
        v-bind="$attrs"
        class="input"
        :regExp="/^\d{0,2}:\d{0,2}$/g"
        :value="value"
        @input="handleInput"
      />
      <input
        type="range"
        v-bind="$attrs"
        min="0"
        max="1800"
        step="15"
        :value="valueInSeconds"
        @input="$emit('input', secondsToDuration($event.target.value))">
      <p v-if="errorMessage" class="has-text-danger is-size-7">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
  import duration from "./duration"
  import VueRegexInput from "vue-regex-input"

  export default {
    props: ['id', 'label', 'value', 'errorMessage'],
    components: {
      VueRegexInput
    },
    computed: {
      valueInSeconds() {
        return this.durationToSeconds(this.value)
      },
    },
    methods: {
      ...duration,

      handleInput(value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style>
input[type=range] {
  width: 100%;
}
</style>
