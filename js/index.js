//var greetings = 'Hello World';
//alert(greetings);
//document.write(greetings);
//console.log(greetings);

//var username=prompt('Your name:');
//var greetings = 'Hello '+username;
//document.write(greetings);
//document.write('<br>')

//var userAge = Number(prompt('Your are:'));
//var nextAge=userAge + 1;
//document.write('Soon you will be: ' +nextAge);

//function sum(a,b,c) {
 //var result = a + b + c;
 //return result;
//}

//var num1 = Number(prompt('num1:'));
//var num2 = Number(prompt('num2:'));
//var num3 = Number(prompt('num3:'))
//var calc = sum(num1,num2,num3);
//document.write(calc);

//function tellAge(age){
//    if (age<18){
//    return 'kid';
//    } else{ 
//        return 'Adult';
//    }
//} 
//
//var age = Number(prompt('you Age:'));
//document.write(tellAge(age));


var a = Number(prompt('Insert a:'));
var b = Number(prompt('Insert b:'));
var c = Number(prompt('Insert c:'));
var x1;
var x2;

 function discriminant(a1,b1,c1){
     console.log(a1,b1,c1);
     var d = b1*b1 - 4 * a1 * c1;
     console.log(d);
     
     if (d>0){
         x1 = (-b1 + Math.sqrt(d)) / 2 * a1;  
                x2 = (-b1 - Math.sqrt(d)) / 2 * a1;
                 return 'x1 = '+x1+' x2 = '+x2;
     }
      if (d === 0) {
         x1 = x2 = -b1 / 2 * a1; 
          return 'x1 = '+x1+' x2 = '+x2;
      }
      else {
      return 'no solutions';
      }
 }
 document.write(discriminant(a,b,c));
 
 
