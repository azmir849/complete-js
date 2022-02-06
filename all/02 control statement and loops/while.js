var num = 0;
//block scope
while(num<=10){
    console.log(num)//infinite loop
    num++;
}


//do-while

var x = 20;

do {
    console.log(x)//infinite loop
    x++;
}while(x<=25)

// Main difference is do-while loop will run at least one time although the condition is false.