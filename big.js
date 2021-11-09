//document.write("hi world");
//console.log("Hi fi");
/*
let x = 100;
let y = 97;
*/
//document.write(x);



/*if(x<y){
    alert("yep");
}else{
    alert("not");
}*/

/*if(x == y){
    document.write("=equal");
}else if(x < y){
    document.write("x < y");
}else{
    document.write("x > y");
}*/


/*
let day = 1;

switch(day){
    case 1: document.write("monday");
        break;   //после этой комынды происходит выход из блока
    case 2: document.write("Tuesday");
        break;
    case 3: document.write("wednesday");
        break;
    default: document.write("another day");  // определяет код для запуска если нет соответсвий
}
*/
/*
for(peremennaiy = 1; peremennaiy <= 10; peremennaiy++){
    document.write(peremennaiy + "<br/>");
}

let per = 1;
for(; per <= 6; per++){
    document.write(per)
}

for(i = 7; i <= 9; i++){
    text = i;
    document.write(i);
}

for(a = 1; a < 10; a++ ){
    document.write(a);
}*/

/*
let i = 0;
while(i <= 9){
    document.write(i + "<br/>");
    i += 1;
}

let r = 10;

do{
    document.write(r+"<br/>");
    r = r + 1;
}
while( r <= 15);*/

/*
for(i = 0;i <= 10; i++){
    if(i == 5){
        break;
    }
    document.write(i + "eb <br/>");
}

for(p = 0; p <= 10; p++){
    if(p == 5){
        continue;
    }
    document.write(p + "<br/>")
}

let sum = 0;
for(u = 4; u < 8; u++){
    if(u == 6){
        continue;
    }
    sum = sum + u;
}

document.write(sum);
*/


/*
function name(){
    alert("eshkarola");
}

name();
name();
*/
/*
function sayHello(name){
    alert("Hi, " + name);
}

sayHello("David");
sayHello("Sarah");
sayHello("john");
*/

/*
function test(x,y){
    if(x > y){
        document.write("100%")
    }else if(x < y){
        document.write("0%")
    }else{
        document.write("50%")
    }
}

test(5,7);
test(7,7);
test(7,5);
*/

/*
function sayHello(name, age){
    document.write("my name is " + name + "I am is " + age + " old");
}

sayHello("Ruslan ", 28);
*/

/*
function myFunction(x,y){
    return x * y;
}

let a = myFunction(5, 6); // не вернет ничего данная функция
*/

/*
function ret(a, b){
    let c = a + b;
    return c;
}

document.write(ret(5, 6));
*/
/*
let user = prompt("please write here your name");

alert(user);*/

/*
let result = confirm("do you really want leave this page?");
if(result == true){
    alert("thanks for visiting");
}else{
    alert("thanks for stay with us");
}*/
/*
function test(number){
    while(number < 5){
        number++
    }
    return number;
}
alert(test(2 ));*/
/*
function sayHello(){
    let c = prompt("you name pls");
    document.write("my name is " + c);
}

sayHello();*/


/*
let person = {
    name: "John", age: 31, favColor: "blue", height: 183
};

let x = person.age;
document.write(x)

let y = person['age'];

document.write(y)
*/

let course =  {name: "javascript", day: 20};

document.write(course.name.length)

let x = course.name;
document.write(x.length)