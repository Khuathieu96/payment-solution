<template>
  <div class="steps-container">
    <TabList
      :items="itemsTab"
      :heading="getCurrentStep.name"
      :onClickTab="changeCurrentTab"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StepsView',
  props: ['msg'],
  data() {
    const listStepIcon = {
      myAccounts: <AccountIcon />,
      transactions: <TransactionsIcon />,
      manageCards: <ManageCardsIcon />,
      depositMoney: <DepositMoneyIcon />,
      convertMoney: <ConvertMoneyIcon />,
      liveChat: <LiveChatIcon />,
    };
    return { listStepIcon };
  },
  computed: {
    ...mapGetters(['getCurrentStep']),
    itemsTab() {
      return this.getCurrentStep.tabs.map((item) => ({
        ...item,
        icon: this.listStepIcon[item.key],
      }));
    },
  },
  methods: {
    changeCurrentTab(index) {
      this.$store.dispatch('changeTab', {
        currentTab: index,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.steps-container {
  display: flex;
  flex-direction: column;
  width: 228px;
  background: #0e0d52;
  height: 100%;
  color: white;
}
</style>
