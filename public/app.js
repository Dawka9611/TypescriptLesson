import { Invoice } from "./classes/invoive.js";
const me = {
    name: 'daawka',
    age: 26,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spend', amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const invOne = new Invoice('mario', 'work on the nario website', 250);
const invTwo = new Invoice('Dawka', 'work on the nario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(`invoices`, invoices);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
