let x, y;

let a = 1,
    b = -9,
    c = 12;
let discriminant = b * b - 4 * a * c;

if(discriminant > 0){
    x = (-b + Math.sqrt(discriminant)) / (2 * a);
    y = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots of quadratic equation are ${x} and ${y}`);
}
else if(discriminant == 0){
    x = y = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${x} and ${y}`);
}
else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
}
