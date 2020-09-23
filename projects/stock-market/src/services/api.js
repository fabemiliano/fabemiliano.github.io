const listOfStocks = ['BPAC11', 'CSNA3', 'CYRE3', 'GOAU4', 'MILS3', 'PETR4', 'PTBL3', 'COGN3', 'VVAR3', 'NTCO3', 'BTOW3'];
const completeName = listOfStocks.map(e => `${e}.BVMF`);

const getStock = async () => fetch(`http://api.marketstack.com/v1/eod/2020-07-31?access_key=7ba5f1dbe910588416f0dbbee890e7e5&symbols=${[...completeName]}`)
  .then((data) => data.json());

const getTickers = async () => fetch('http://api.marketstack.com/v1/tickers?access_key=7ba5f1dbe910588416f0dbbee890e7e5')
  .then((data) => data.json());

  const getTickerbyName = async (name) => fetch(`http://api.marketstack.com/v1/tickers?access_key=7ba5f1dbe910588416f0dbbee890e7e5&search=${name}`)
  .then((data) => data.json());

export { getStock, getTickers, getTickerbyName };
