<template>
  <div
    class="flex-row dropdown-container"
    @click="open = !open"
    @blur="open = false"
  >
    <div class="flex-column column-left">
      <span class="number">564.43</span>
      <span class="text">Available</span>
    </div>
    <down-arrow-icon />
    <div v-if="open" class="flex-column dropdown-list">
      <div
        v-for="item in items"
        :value="item"
        :key="item"
        class="dropdown-item"
        @click="$emit('change', item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownInput',
  props: ['items'],
  emits: ['update:modelValue'],
  data() {
    return { open: false };
  },
};
</script>

<style scoped>
.dropdown-container {
  width: 110px;
  position: relative;
  align-items: center;
  cursor: pointer;
}
.number {
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
}
.text {
  font-weight: 600;
  font-size: 15px;
  line-height: 27px;
}
.dropdown-list {
  position: absolute;
  top: 58px;
  left: 0;
  background: white;
  padding: 8px 0;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 3px 7px #d7d9de;
}
.column-left {
  margin-right: 10px;
}
.dropdown-item {
  padding: 4px 8px;
  cursor: pointer;
}
.dropdown-item:hover {
  background-color: #0e0d5238;
}
</style>
