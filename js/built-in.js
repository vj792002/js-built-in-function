//Number Methods

console.log("NUMBER METHODS:");
//1.toFixed()

var num= 10.1987;
console.log("toFixed:")
console.log(num.toFixed(1));

//2. toString()

 var a=Number(15);
 console.log("toString:")
 console.log(a.toString());
 
 //3. valueOf()
 
  var b= Number(15);
 console.log("valueOf:")
 console.log(a.valueOf());
 
 //boolean Methods
 console.log("bOOLEAN METHODS:");

 //1.tostring()

var a=true;
var res=a.toString();
console.log("toString():")
console.log(res);

//2.valueOf()

var a=false;
var res=a.valueOf();
console.log("valueOf():")
console.log(res);

//string Methods

console.log("STRING METHODS:");

//1.charAt()
var a="Hello Javascript"
var res=a.charAt(10);
console.log("charAt():")
console.log(res);

//2.concat()

var a="Hello";
var b="Javascript";
var res=a.concat(b);
console.log("concat():");
console.log(res);

//3.indexOf()

var a="Hello Javascript";
var res=a.indexOf("v");
console.log("indexOf():")
console.log(res);

//4.lastindexof()

var a="Hello Javascript. I am vijay";
var res=a.lastIndexOf("v");
console.log("lastIndexOf():");
console.log(res);

//5.length()

var a="Hello";
var res=a.length;
console.log("length():");
console.log(res);

//6.split()

var a="Hello Javascript. I am vijay";
var res=a.split(" ");
var res1=a.split(" ")[2];
var res2=a.split("");
console.log("split():");
console.log(res);
console.log(res1);
console.log(res2);

//7. slice()

var a="Hello Javascript. I am vijay";
var res=a.slice(0,5);
var res1=a.slice(2,5);
var res2=a.slice(10,20);
console.log("slice():");
console.log(res);
console.log(res1);
console.log(res2);

//8.toLowerCase()

var a="HELLO JAVASCRIPT";
var res=a.toLowerCase();
console.log("toLowerCase():");
console.log(res);

//9.toUpperCase()

var a="hello javascript";
var res=a.toUpperCase();
console.log("toUpperCase():");
console.log(res);

//10.toString()

var a="hello javascript";
var res=a.toString();
console.log("toString():");
console.log(res);

//11.valueOf()

var a="hello javascript";
var res=a.valueOf();
console.log("valueOf):");
console.log(res);

//data methods

console.log("DATA METHODS:");

//1.Date()

var a=Date();
console.log("Date():");
console.log(a);

//2.getDate()

var a=new Date();
var b=a.getDate();
console.log("getDate():");
console.log(b);

//3.getDay()

var a=new Date();
var b=a.getDay();
console.log("getDay():");
console.log(b);

//4.getFullYear()

var a=new Date();
var b=a.getFullYear();
console.log("getFullYear():");
console.log(b);

//5.getHours()

var a=new Date();
var b=a.getHours();
console.log("getHours():");
console.log(b);

//6.getMilliseconds()

var a=new Date();
var b=a.getMilliseconds();
console.log("getMilliseconds():");
console.log(b);

//7.getMinutes()

var a=new Date();
var b=a.getMinutes();
console.log("getMinutes():");
console.log(b);

//8.getMonth()

var a=new Date();
var b=a.getMonth();
console.log("getMonth():");
console.log(b);

var a=["January","February","March","April","May","June","July","August","September","October","November","December"];
var b=new Date();
var c=a[b.getMonth()];
console.log(c);

//9.getSeconds()

var a=new Date();
var b=a.getSeconds();
console.log("getSeconds():");
console.log(b);