// @ts-check
export function buildCaption(greeting = '', name = '', token = '') {
  return `${greeting}, ${name}! 
You're welcome to the event, your token number is ${token}! 🎟️
Enjoy!`};

export function firstName(fullName) {
  return fullName.trim().split(/\s+/)[0];
};

 export function randomGreeting() {
  const greetings = [
    "Howzit",
    "Howdy",
    "Hello",
    "Hi",
    "Yo",
    "Hey",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
 };
 