<template>
  <div class="field">
    <label :for="id" class="label">{{ label }}</label>
    <div class="control">
      <input
        :id="id"
        v-bind="$attrs"
        type="number"
        class="input"
        :value="value" @input="$emit('input', $event.target.value)" />
      <input
        type="range"
        min="1"
        max="30"
        :value="value"
        @input="$emit('input', $event.target.value)">
      <p v-if="errorMessage" class="has-text-danger is-size-7">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['id', 'label', 'value', 'errorMessage']
  }
</script>

<style>
input[type=range] {
  width: 100%;
}
</style>
