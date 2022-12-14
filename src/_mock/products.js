import { faker } from '@faker-js/faker';
import { sample } from 'lodash';


const PRODUCT_NAME = [
  'Shakey',
  'Branchy',
  'Speedy Tree Mark V',
  'Leafla',
  'Green',
  'Canelopy',
  'Tree 2',
  'Jessica',
  'Randy',
  'Barkley',
  'Thirsy',
  'Money Tree',
  'Jelousy',
  'Invasive Plant (don\'t tell anyone)',
  'Chesnut Tree Wannabe',
  'Ruby',
  'Carson',
  'Miner',
  'Trumple Stuffs',
  'Artemis',
  'Candle Jack',
  'Adamson',
  'Percy',
  'Whimsical Delight',
  'Plausoon'
];

const PRODUCT_COLOR = ['#00AC66', '#000000', '#EEEEEE', '#FFC1CA', '#FF4841', '#1890FF', '#94D82E', '#FFC307'];


const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/bonsai/${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
