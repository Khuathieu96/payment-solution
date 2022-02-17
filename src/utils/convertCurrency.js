const convertCurrency = (fromRate, toRate, amount) => {
  return (amount * toRate) / fromRate;
};

export default convertCurrency;
