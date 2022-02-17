<template>
  <div class="input-container">
    <label class="label" v-if="modelValue">
      {{ label }}
    </label>
    <input
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :readOnly="readOnly"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['label', 'modelValue', 'readOnly'],
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
}
.label {
  position: absolute;
  top: -10px;
  left: 8px;
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px;
  background: white;
}
.input {
  padding: 16px;
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid #2e3a42;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
}

.input:read-only {
  cursor: unset;
}
</style>
