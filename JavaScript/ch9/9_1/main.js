let myName = "dada";
let email = "jc1525@hanmail.net"
let hello = `hello ${myName}!!`

console.log(myName);
console.log(email);
console.log(hello);

let user = {
  name: 'dadtt',
  age:85
};
console.log(user);
console.log(user.age);
console.log(user.name);


function helloFunc(){
  console.log(1234);
}

helloFunc()

function returnFunc(){
  return 1234444
}

let a = returnFunc();
console.log(a)

function sum(a,b){
  return a + b;

}

a = sum(1,2)
let b = sum(7,12);
let c = sum(2,4)
console.log(a,b,c) 

function hello2(){
  console.log('hello~');
}

//익명함수!! 데이터나 변수로 활용됨
//함수 표현!! Hoisting
let world = function () {
  console.log('World~');
}


hello2()
world()


const dada = {
  name : 'dadada',
  age : 26,
  //Mathod 메소드 
  getName : function () {
    return this.name
  }
}


const herName = dada.getName();
console.log(herName);
console.log(dada.getName());

//조건문 
let isShow = true;
let checked = false;

if(isShow){
  console.log('Show!')
}

if(checked){
  console.log('checked')
}

if (isShow){
  console.log('show!');
}else{
  console.log('hide?')
}
if (checked){
  console.log('show!');
}else{
  console.log('hide?')
}


