function getTime(): number {
    return new Date().getTime();
  }
  console.log(getTime());
function printHello():void{
    console.log('Hello!');
  }
  
  printHello();
let X: unknown = 'hello';

console.log((X as string).length);
let x = 'hello';
console.log(((x as unknown) as number).length);
