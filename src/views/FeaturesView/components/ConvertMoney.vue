<template>
  <div class="flex-column convert-container">
    <div class="flex-row">
      <div class="flex-row dropdown-box">
        <div class="flex-column column1">
          <component :is="currencyIcon[typeFrom]" />
          <span class="currency-type">{{ typeFrom }}</span>
        </div>
        <dropdown-input :items="currencyType" @change="onChangeFrom" />
      </div>
      <div class="flex-column input-box">
        <text-input label="You send" v-model="amountFrom" />
      </div>
    </div>
    <div class="flex-column infor-box">
      <time-line :items="rate" />
    </div>

    <div class="flex-row">
      <div class="flex-row dropdown-box">
        <div class="flex-column column1">
          <component :is="currencyIcon[typeTo]" />
          <span class="currency-type">{{ typeTo }}</span>
        </div>
        <dropdown-input :items="currencyType" @change="onChangeTo" />
      </div>
      <div class="flex-column input-box">
        <text-input label="Recipient gets" v-model="amountTo" readOnly />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { convertCurrency } from '@/utils';

export default {
  name: 'ConvertMoney',
  props: ['msg'],
  data() {
    const currencyType = ['USD', 'EUR', 'CAD', 'GBP', 'MXN', 'PLN'];
    const currencyIcon = {
      USD: <USDBalanceIcon />,
      EUR: <EURBalanceIcon />,
      CAD: <CADBalanceIcon />,
      GBP: <GBPBalanceIcon />,
      MXN: <MXNBalanceIcon />,
      PLN: <PLNBalanceIcon />,
    };
    return {
      currencyIcon,
      currencyType,
      amountFrom: 1,
      typeFrom: 'USD',
      amountTo: 1.204355,
      typeTo: 'CAD',

      rate: [
        { icon: <MinusCircleIcon />, descriptions: '3.67 USD fees' },
        {
          icon: <ExportCircleIcon />,
          descriptions: '0.854565 EUR exchange rate',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getCurrencyRate']),
    stateDependencies() {
      return `${this.amountFrom}|${this.typeFrom}|${this.typeTo}`;
    },
  },
  watch: {
    stateDependencies() {
      const convertedAmount = convertCurrency(
        this.getCurrencyRate[this.typeFrom],
        this.getCurrencyRate[this.typeTo],
        this.amountFrom,
      );
      this.amountTo = convertedAmount;
    },
  },

  methods: {
    onChangeFrom(item) {
      this.typeFrom = item;
    },
    onChangeTo(item) {
      this.typeTo = item;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.convert-container {
  flex: 1;
  align-items: center;
  padding-top: 113px;
}

.input-box {
  width: 307px;
  height: 104px;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 3px 7px #d7d9de;
  border-radius: 0 8px 8px 0;
}

.dropdown-box {
  width: 208px;
  height: 104px;
  margin-right: 6px;
  background: #ffffff;
  box-shadow: 0px 3px 7px #d7d9de;
  border-radius: 8px 0 0 8px;
  align-items: center;
  justify-content: center;
}

.infor-box {
  width: 446px;
  height: 154px;
  background: #edf6ff;
  margin: 0 35px 0 35px;
  z-index: -1;
}

.currency-type {
  font-size: 15px;
  line-height: 27px;
}
.column1 {
  margin-right: 20px;
}
</style>
