import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const initialState = {
  steps: [
    {
      name: 'Step 1',
      key: 'Step1',
      tabs: [],
      currentTab: 0,
    },
    {
      name: 'Step 2',
      key: 'Step2',
      tabs: [
        { name: 'My Accounts', key: 'myAccounts' },
        { name: 'Transactions', key: 'transactions' },
        { name: 'Manage Cards', key: 'manageCards' },
        { name: 'Deposit Money', key: 'depositMoney' },
        { name: 'Convert Money', key: 'convertMoney' },
        { name: 'Live Chat', key: 'liveChat' },
      ],
      currentTab: 4,
    },
  ],
  currentStep: 1,
  currencyRate: {
    USD: 1,
    EUR: 0.815894,
    CAD: 1.204355,
    GBP: 0.70602,
    MXN: 19.88162,
    PLN: 3.66121,
  },
};

const store = createStore({
  state: initialState,
  actions,
  getters,
  mutations,
});

export default store;
