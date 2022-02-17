<template>
  <div class="flex-column timeline-container">
    <div class="flex-row line" v-for="(item, index) in items" :key="index">
      <component :is="item.icon" />
      <span class="desc">{{ item.descriptions }}</span>
    </div>

    <div class="vertical-line" />
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  props: ['items'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-container {
  justify-content: center;
  height: 100%;
  position: relative;
}

.line {
  margin: 12px;
  align-items: center;
}

.vertical-line {
  position: absolute;
  top: 0;
  left: 21px;
  width: 0px;
  height: 100%;
  border-right: 1px dashed #234afb;
  z-index: -1;
}

.desc {
  margin-left: 18px;
  font-size: 12px;
  line-height: 20px;
}
</style>
