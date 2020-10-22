const axios = require('axios');
const qs = require('qs');
const { encode } = require('js-base64');

const clientId = '7fa1a7ed-dd63-4ab2-b199-aeac83bc0994';
const clientSecret = '8a79110b-1954-414c-aaa1-8c222aee20e3';
const authorization = encode(`${clientId}:${clientSecret}`);
const cardNumber = '4012001037141112';
const customerId = 'teste@test.com';

const data = qs.stringify({
  scope: 'oob',
  grant_type: 'client_credentials',
});

const config = {
  method: 'post',
  url: 'https://api-sandbox.getnet.com.br/auth/oauth/v2/token',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    authorization: `Basic ${authorization}`,
  },
  data,
};

const data2 = {
  card_number: cardNumber,
  customer_id: customerId,
};

const config2 = (auth) => ({
  method: 'post',
  url: 'https://api-sandbox.getnet.com.br/v1/tokens/card',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${auth}`,
  },
  data: data2,
});

const data3 = (cardToken) => ({
  seller_id: '66ab84a1-2e78-494c-80e2-bc3fe98c969e',
  amount: '1000',
  order: {
    order_id: '12345',
  },
  customer: {
    customer_id: '12345',
    billing_address: {},
  },
  device: {},
  shippings: [
    {
      address: {},
    },
  ],
  credit: {
    delayed: false,
    save_card_data: false,
    transaction_type: 'FULL',
    number_installments: 1,
    card: {
      number_token: cardToken,
      cardholder_name: 'JOAO DA SILVA',
      expiration_month: '12',
      expiration_year: '21',
    },
  },
});

const config3 = (token, cardToken) => ({
  method: 'post',
  url: 'https://api-sandbox.getnet.com.br/v1/payments/credit',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  data: data3(cardToken),
});

let token;

axios(config)
  .then((response) => {
    token = response.data.access_token;
    axios(config2(response.data.access_token))
      .then((response) => {
        axios(config3(token, response.data.number_token))
          .then((response) => console.log(response));
      });
  })
  .catch((error) => {
    console.log(error);
  });
