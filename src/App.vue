<template>
  <div class="flex-column container-payment">
    <div class="step-mobile" @click="isOpen = !isOpen">
      <AccountIcon />
      <span style="margin-left: 8px">Step Navigation</span>
    </div>
    <div class="flex-row content">
      <div class="step-non-mobile" :class="{ 'open-step': isOpen }">
        <StepsView />
      </div>
      <div class="content" @click="isOpen = false">
        <FeaturesView />
      </div>
    </div>
  </div>
</template>

<script>
import { FeaturesView, StepsView } from './views';

export default {
  name: 'App',
  components: {
    FeaturesView,
    StepsView,
  },

  data() {
    return { isOpen: false };
  },
};
</script>

<style>
.container-payment {
  height: 100%;
}

.content {
  flex: 1;
  overflow: auto;
}
.step-mobile {
  display: none;
  color: white;
  align-items: center;
  padding-left: 16px;
}

.step-non-mobile {
  width: 228px;
}

@media only screen and (max-width: 576px) {
  .step-mobile {
    flex-direction: row;
    align-items: center;
    display: flex;
    background-color: #0e0d52;
    height: 64px;
    width: 100%;
  }
  .step-non-mobile {
    display: none;
  }
  .open-step {
    display: unset;
  }
}
</style>
