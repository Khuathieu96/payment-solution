<template>
  <div class="steps-container">
    <div class="flex-row header-container">
      <progress-bar-icon />
      <div class="flex-column middle-column">
        <span class="step-heading">{{ heading }}</span>
        <span class="step-desc">Specify amount</span>
      </div>
      <primary-down-arrow-icon />
    </div>
    <div class="flex-column list-container">
      <div
        v-for="(item, index) in items"
        :key="item.key"
        @click="onClickTab && onClickTab(index)"
        class="flex-row tab-item"
      >
        <component :is="item.icon" />
        <span class="tab-item-name">{{ item.name }}</span>
      </div>
    </div>
    <div>
      <div class="flex-row app-button">
        <cart-icon />
        <span class="button-text">Mini Apps</span>
        <span class="pro-text">PRO</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: ['items', 'heading', 'onClickTab'],
};
</script>

<style scoped>
.steps-container {
  display: flex;
  flex-direction: column;
  width: 228px;
  background: #0e0d52;
  height: 100%;
  color: white;
}
.header-container {
  background: #2a2e94;
  align-items: center;
  padding: 14px;
}

.step-heading {
  color: #e0f5ff;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 4px;
}

.step-desc {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
}
.middle-column {
  margin-left: 14px;
  flex: 1;
}
.list-container {
  margin-top: 23px;
  flex: 1;
}
.tab-item {
  height: 50px;
  padding: 0 16px;
  cursor: pointer;
  align-items: center;
}
.tab-item:hover {
  background-color: #2a2e94;
}
.app-button {
  border: 2px solid #e0f5ff;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 16px;
  margin: 15px 14px;
  align-items: center;
}

.button-text {
  color: #e0f5ff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  flex: 1;
  margin-left: 8px;
}
.pro-text {
  border: 1px solid #e0f5ff;
  box-sizing: border-box;
  padding: 3px;
  color: #e0f5ff;
  font-size: 10.5px;
  line-height: 12px;
  border-radius: 3.36px;
}
.tab-item-name {
  font-weight: 600;
  font-size: 14px;
  color: #e0f5ff;
  margin-left: 13px;
}
</style>
