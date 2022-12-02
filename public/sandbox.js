"use strict";
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')
// // names.push(3)
// // names[0] = 3
// let numbers = [10, 20, 30]
// numbers.push(25)
// let mixed = ['ken', 2, 5, 'chun-li', 9]
// mixed.push('hello')
// mixed.push(90)
// mixed.push(90)
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
// ninja.age = 40
// ninja.name = 'ryu'
// // ninja.age ='30'
// ninja.skills = ['fighthin', 'sneacking']
// ninja = {
//     name: 'oshi',
//     belt: 'orange',
//     age: 40,
//     skills: []
// }
// //explicit types - todorhoiloh
// let character: string;
// let age: number;
// let isBoolean: boolean;
// age = 30;
// isBoolean = true
// //arrays
// let ninjas: string[] = []
// ninjas.push('shaun')
// //union types
// let mixed: (string | number | boolean)[] = []
// mixed.push('hello')
// mixed.push(23)
// mixed.push(false)
// console.log(mixed)
// let uid: string | number
// uid = 'hello'
// uid = 123
// //objects
// let ninjaOne:object;
// ninjaOne={name:'yoshi', age: 30}
// let ninjaTwo:{
//     name: string,
//     age: number,
//     beltColour: string
// };
// ninjaTwo={name: 'test', age: 30, beltColour: 'black'}
// let age : any = 25;
// age ='24'
// age = true
// let mixed: any[]=[]
// mixed.push(5)
// mixed.push('game')
// let ninja:{name: any, age:any}
// ninja = {name: '123', age:'67'}
// let greet: Function
// greet = () => {
//     console.log('helooo, world')
// }
// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b)
//     console.log(c)
// }
// // add(5, 10)
// add(5, 10, 20)
// const minus = (a: number, b: number): number => {
//     return a + b
// }
// let result = minus(10, 7)
// result ='hello'
// greet ='hello'
// type StringOrNum = string | number
// type objWithName = { name: string, uid: StringOrNum }
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has string`)
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }
/////////////Function signature
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
