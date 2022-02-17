export default {
  getCurrentStep(state) {
    const { steps, currentStep } = state;
    return steps[currentStep];
  },
  getCurrentKey(state) {
    const { steps, currentStep } = state;
    const { tabs, currentTab, key: stepKey } = steps[currentStep];
    return { tabKey: tabs[currentTab].key, stepKey };
  },
  getCurrencyRate(state) {
    return state.currencyRate;
  },
};
