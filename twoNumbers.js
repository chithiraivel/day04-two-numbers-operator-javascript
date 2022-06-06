

let a=parseInt(prompt("Enter first Number"));
let b=parseInt(prompt("Enter Second Number"));
let c=prompt("Operations");

if(c=='+'){
    d=a+b;
    console.log(" A = " + a + " B = " + b + " Addition Number is " + d);
}
else if(c=='-'){
    d=a-b;
    console.log(" A = " + a + " B = " + b + "Substraction Number is " + d);
}
else if(c=='*'){
    d=a*b;
    console.log(" A = " + a + " B = " + b + "Multiplication Number is " + d);
}
else if(c=='/'){
    d=a/b;
    console.log(" A = " + a + " B = " + b + "Division Number is " + d);
}