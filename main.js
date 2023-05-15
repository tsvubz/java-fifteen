let x;
let y;

function doOperations(x, y) {
  const add = x + y;
  const sub = x - y;
  const mult = x * y;

  if (add < 0 || sub < 0 || mult < 0) {
    console.log('Result is invalid');
  }else {
    console.log (`The result of addition is ${add}`);
    console.log (`The result of subtraction is ${sub}`);
    console.log (`The result of mulitiplication is ${mult}`);
  }
}

doOperations(2, 5);
doOperations(8, 3);
doOperations(-3, 12);
doOperations(13, 7);