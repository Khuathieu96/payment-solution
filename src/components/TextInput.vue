<template>
  <div class="input-container">
    <label class="label" v-if="value">
      {{ label }}
    </label>
    <input
      ref="input"
      :placeholder="label"
      :value="value"
      @input="updateValue"
      class="input"
      :readOnly="readOnly"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script>
const numberRegex = /[^0-9.]/g;
export default {
  name: 'TextInput',
  props: ['label', 'modelValue', 'readOnly'],
  emits: ['update:modelValue'],

  data() {
    return {
      error: '',
      value: '',
    };
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.value = String(val).replace(numberRegex, '');
      },
    },
  },

  methods: {
    updateValue(event) {
      const numberVal = event.target.value.replace(numberRegex, '');

      if (!numberVal || parseInt(numberVal, 10) > 500) {
        this.error = 'Please enter a number value from 1 to 500';
      } else {
        this.error = '';
        this.$emit('update:modelValue', parseInt(numberVal, 10));
      }

      this.value = numberVal;
      this.$refs.input.value = String(numberVal);
    },
  },
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

.error {
  position: absolute;
  top: 55px;
  left: 0px;
  color: red;
  font-size: 12px;
  line-height: 20px;
}
</style>
