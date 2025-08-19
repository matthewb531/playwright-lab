export const list = [
  { name: "Ahmet", message: "2"},
  { name: "Bob", message: "3"},
  { name: "Caitlin", message: "4"},
  { name: "David", message: "5"}
];

export const body = (name = '', message = '') =>
  `Hey there, ${name}! Welcome to the party, you're number ${message}!`;