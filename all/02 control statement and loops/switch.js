// Find the area of circle,triangle,rectangle

var area = 'circle';
var pi = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log('The area of the circle is : ' + pi*r**2);
        break;
    case 'triangle':
        console.log('The area of the triangle is : ' + (l*b)/2);
        break;
    case 'rectangle':
        console.log('The area of the rectangle is : ' + (l*b));
        break

    default: 
        console.log('Enter the vaild data')
}

