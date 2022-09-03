/*
├── users = US
├── books = BK
├── categories = CT
└── authrs = AT
*/

type u = 'US';
type b = 'BK';
type c = 'CT';
type a = 'AT';

export const ID = (prefix: u|b|c|a) => {
  const one = Math.random().toString(36).substr(2, 4);
  const two = Math.random().toString(36).substr(2, 4);
  return `${prefix}-${one}-${two}`.toUpperCase();
};
