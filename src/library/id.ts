/*
├── users = USR
├── categories = CTG
├── books = BK
└── authors = AT
*/

export const ID = (prefix: string) => {
  const one = Math.random().toString(36).substr(2, 4);
  const two = Math.random().toString(36).substr(2, 4);

  return `${prefix}-${one}-${two}`.toUpperCase();
};
