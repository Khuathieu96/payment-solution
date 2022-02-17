export default {
  changeStep(state, { currentStep }) {
    state.currentStep = currentStep;
  },
  changeTab(state, { currentTab }) {
    const { steps, currentStep } = state;
    steps[currentStep].currentTab = currentTab;
  },
};
