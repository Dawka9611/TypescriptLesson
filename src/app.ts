import { Invoice } from "./classes/invoive.js"

// console.log('a', anchor.href)

//interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number
}

const me: IsPerson = {
    name: 'daawka',
    age: 26,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('i spend', amount)
        return amount
    },
}

console.log(me)

const greetPerson =(person: IsPerson)=>{
    console.log('hello', person.name)
}
greetPerson(me)

const invOne = new Invoice('mario', 'work on the nario website', 250)
const invTwo = new Invoice('Dawka', 'work on the nario website', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(`invoices`, invoices)


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)


//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    )
})