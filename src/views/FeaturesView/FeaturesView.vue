<template>
  <div class="features-container">
    <ConvertMoney v-if="getCurrentKey.tabKey ==='convertMoney'"/>
  </div>
</template>

<script>
import {ConvertMoney} from './components'
import { mapGetters } from 'vuex'

export default {
  name: 'FeaturesView',
  props: {
    msg: String
  },
  components: {
    ConvertMoney
  },
  computed: {
    ...mapGetters([
      'getCurrentKey'
    ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.features-container {
  flex: 1;
  display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
