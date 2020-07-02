let totalPrice = localStorage.getItem('final-price');
totalPrice = parseFloat(totalPrice);


document.querySelector('.cart__items').innerHTML = localStorage.getItem('loadCart');
document.querySelectorAll('.cart__item').forEach((el) => {
  el.addEventListener('click', () => {
    const el2 = el.previousSibling;
    cartItemClickListener(el, el2);
  });
});


const cartPrice = document.createElement('div');
cartPrice.className = 'total-price';
cartPrice.innerHTML = totalPrice;
document.querySelector('.cart__title').appendChild(cartPrice);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

let arrn = []
function cartItemClickListener(li, price) {
  console.log(li, price)
  totalPrice -= parseFloat(price);
  arrn = arrn.filter(e => e !== price)
  console.log(arrn, totalPrice)
  li.remove();
  document.querySelector('.total-price').innerHTML = totalPrice
}

function createCartItemElement({ id, title, price }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  arrn.push(price)
  console.log(arrn)
  li.addEventListener('click', () => {
    cartItemClickListener(li, price);
  });
  return li;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.querySelector('button').addEventListener('click', () => {
    const load = document.createElement('div');
    load.innerHTML = 'Loading';
    load.className = 'loading';
    document.querySelector('.cart__items').appendChild(load);
    const URL = `https://api.mercadolibre.com/items/${sku}`;
    fetch(URL, myObject)
      .then(data => data.json())
      .then((data) => {
        document.querySelector('.loading').innerHTML = '';
        document.querySelectorAll('.loading').forEach(e => e.remove());
        const { id, title, price } = data;
        totalPrice += price;
        cartPrice.innerHTML = totalPrice;
        const newItem = createCartItemElement({ id, title, price });
        document.querySelector('.cart__items').appendChild(newItem);
      });
  });
  return section;
}

let API_URL = '';
const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

document.querySelector('.go').addEventListener('click', () => {
  document.querySelector('.items').innerHTML = '';
  let itemSearched;
  const searchItem = new Promise(function (resolve) {
    const load = document.createElement('div');
    load.innerHTML = 'Loading';
    load.className = 'loading';
    document.querySelector('.loading-area').appendChild(load);
    itemSearched = document.querySelector('.search').value;
    document.querySelector('.search').value = '';
    resolve(itemSearched)
  });
  searchItem
    .then((item) => {
      API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
      return fetch(API_URL, myObject);
    })
    .then(data => data.json())
    .then((data) => {
      document.querySelector('.loading').innerHTML = '';
      document.querySelector('.loading').remove();
      data.results.forEach((el) => {
        const { id: sku, title: name, thumbnail: image } = el;
        const newElement = createProductItemElement({ sku, name, image });
        document.querySelector('.items').appendChild(newElement);
      });
    });
});

document.querySelector('.logo').addEventListener('click', () => {
  window.location.reload();
});

document.querySelector('.empty-cart').addEventListener('click', () => {
  document.querySelector('.cart__items').innerHTML = '';
  totalPrice = 0;
  document.querySelector('.total-price').innerHTML = 'R$ 0,00';
});

console.log(document.querySelectorAll('.cart__item2'))
window.addEventListener('unload', () => {

  localStorage.setItem('final-price', totalPrice);

  localStorage.setItem('loadCart', document.querySelector('.cart__items').innerHTML);
});
