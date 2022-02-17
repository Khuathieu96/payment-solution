<template>
  <div class="container-payment">
    <StepsView />
    <FeaturesView />
  </div>
</template>

<script>
import {FeaturesView, StepsView} from './views'

export default {
  name: 'App',
  components: {
    FeaturesView,
    StepsView
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
}
#app{
  
  width: 100%;
  height: 100%;
}

.container-payment{
  display: flex;
  flex-direction: row;
  height: 100%;
}
ul {
  list-style-type: none;
}
</style>
