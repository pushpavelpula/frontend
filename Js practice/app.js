 console.log('hello');
 console.log(123);
 console.log(true);
 var greetings='hai';
 console.log(greetings);

 console.log([1,2,33,44])
 console.log({a:1,b:3});

  console.error('this is some error');
  console.time('helo');
  console.log('hai');
  console.log('hai');
  console.log('hai');
  console.log('hai');
  console.log('hai');
  console.timeEnd('helo');
  console.warn('this is warning');



  //var,let,const
//   var name='john';
//   console.log(name);
//   name ='steve';
//   console.log(name);
   
  //init var
  var greetings;
  console.log(greetings);
  greetings='hey';
  console.log(greetings);

  //Multi word vars
  var firstName='john'; //Camel case
  var first_name='john';//underscore
  var FirstName='john'; //pascel case
  var firstname;

  //let
  let greeting;
console.log(greeting);
greeting='heyy';
console.log(greeting);

//Const
const sur ='smith';
console.log(sur);

// const person ={
//     name:'john',
//     age:30
// }
// person.name='sara'
// person.age='34'
// console.log(person)

// const numbers =[1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);


//datatypes

//primitive

//string
const name ='jhon';
//num
const age =32;
//boolean
const haskids=true;
//null
const car=null;
//undifined
let test;
//symbol
const sym = Symbol();
console.log(typeof sym);


//REFERENCE TYPES OBJECTS

//Array
const hobbies =['movies', 'music'];
//object literal
const address ={
    city:'Boston',
    state:'ma'
}
// const today =new Date();
// console.log(today);
// 
// console.log(typeof today );


//type conversion
let val;
 //num to string
val = (true);
val = String(555);
val = String(4+4+56);
//bool to string
val = String(true);
//date to string
val = String(new Date())
//array to string
val = String(4,1,5,6); 

// tostring()
val = (5).toString();
val = (true).toString();

 //string to num
 val = Number('5');
 val = Number(true);
 val = Number(false);
 val = Number(null);
 val = Number([1,2,3]);
 val = Number('hellol');
 val = parseInt('100.30')
 val = parseFloat()
 //o/p
 console.log(val);
 console.log(typeof val);
//  console.log( val.length);
console.log(val.toFixed());

const val1 = 23;
const val2 = 203;
sum = val1+val2;
console.log(sum);
  

//num & math object
const num1 = 100;
const num2 = 200;
let value; 
 //simple equ with num
value = num1 + num2;
value = num1 * num2;
value = num1 - num2;
value = num1 / num2;
value = num1 % num2;
//math obj
value = Math.PI;
value = Math.E;
value = Math.round(2,4);
value = Math.ceil(2,4);
value = Math.floor(2,4);
value = Math.sqrt(16);
value = Math.abs(-456);
value = Math.pow(9 ,4);
value = Math.max(9,67,34,4,67,89);
value = Math.min(9,67,34,4,67,89,-2);
value = Math.random(20);
value =Math.floor( Math.random() * 20+1);
console.log(value);


//string methods & concatenation
const firstname1 = 'pushpa';
const lastname = 'velpula';
const agee = 35;
let concat;
concat = firstname1 + lastname;
//concatenation
concat = firstname1 +' '+ lastname;
//append
concat = 'bradas';
concat +='traversyws';
concat = ' Hello . my name is ' + firstname1 + 'and I am' + age;
//escaping
concat ='That\'s awesome, I can\'t wait' ;
//length
concat = firstname1.length;
//concat
concat = firstname1.concat('',lastname);
//change case
concat = firstname1.toUpperCase();
concat = firstname1.toLowerCase();
concat = firstname1[2];
// indexof()
concat = firstname1.indexOf('1');
concat = firstname1.lastIndexOf('1');
//cahrAt
concat = firstname1.charAt('2');
//GET last char
concat = firstname1.charAt(firstname1.length + 1);
//substring
concat = firstname1.substring( 0, 3);
//slice
concat = firstname1.slice( 0,5);
concat = firstname1.slice( -3);
//spilt
concat = firstname1.split( '');
concat = firstname1.split( ',');
//replace
concat = firstname1.replace( 'pushpa','bahnu');
//includes
concat = firstname1.includes( 'hema');
console.log(concat);


//templets literals - 12
const nameee = 'jhon';
const ageee = 43;
const job = 'developer';
const city = 'pune';
let html;
//without template strings(es5)
html = '<ul><li>Name: '+ nameee + '</li><li>Name:' + ageee +'</li><li>Name:'+ job +'</li><li>Name:'+ city +'</li><ul>';
html = '<ul>' +
'<li>Name: '+ nameee + '</li>' +
'<li>age: '+ ageee +'</li>' +
'<li>job:'+ job +'</li>' +
'<li>city:'+ city +'</li>'
'</ul>';
function hello(){
  return 'hello';
}
// with templetes strings (es6)
// html=`
// <ul>
// <li>Name:${nameee}</li>
// <li>age: ${ageee}</li>
// <li>job: ${job}</li>
// <li>city:${city}</li>
// <li>${2+2}</li>
// <li> ${hello}/</li>
// <ul/> 
// `;
// document.body.innerHTML = html;

//arrays & arrays methods
const numbers = [43,56,33,67];
const numbers2 = [43,56,33,67];
const fruit = ['apple','mango','pear'];
const mixed = [22,'hello',true,undefined,null,{a:1,b:1},new Date()];
let arrval;
arrval =numbers.length;
console.log(numbers2);
console.log(arrval);


arrval =Array.isArray(numbers);
//get single value
arrval = numbers[3];
arrval = numbers[0];
//insert in array
numbers[2] = 100;
//find index of value
arrval = numbers.indexOf[36];

//mutatting arrays
//add to an end
numbers.push(250);
//add on to front
numbers.unshift(250);
//ADD on front
numbers.pop();
//take off from front
numbers.shift();
//spilce values
numbers.splice(1,3);
//reverse
numbers.reverse();
//concatenate array
arrval = numbers.concat(numbers2);
//sorting arrays
arrval = fruit.sort();
arrval = numbers.sort();
//use the "compare function"
arrval = numbers.sort(function(x,y)
{
  return x-y;
});
//find
function under50(num){
  return num< 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(arrval);


//obiject lietrals
const person ={
  firstt_name:"streve",
  lastt_name:"smith",
  aage:39,
  email:'strve@email.com',
  hobbies:['music','sports'],
  adresq:{
    city:'miami',
    state:'fl'
  },
  getBirthYear: function(){
    return 2017 - this.aage;
  }
}
let lit;
lit = person;
lit = person.firstt_name;
lilit = person.lastt_name;
lit = person.aage;
lit = person.hobbies[1];
lit = person.adresq.state;
lit = person.adresq.city;
lit = person.getBirthYear;
 
 const people =[
  {namea:'john',agew:45},
  {namea:'johns',agew:45}
   ]
 lit =people; 
   console.log(lit);


   
   let day;
   const today = new Date();
   let birth = new Date('9-10-2001 11:34:44');
   birth = new Date('september 10 2001');
   birth = new Date('9/10/2001');
   
    day = today.getMonth();
    day = today.getDate();
    day = today.getDay();
    day = today.getFullYear();
    day = today.getHours();
    day = today.getMinutes();
    day = today.getSeconds();
    day = today.getMilliseconds();
    day = today.getMonth();

    console.log(day);
   








 