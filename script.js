// const numbersArray = [12, 13, 14, 15, 16];
// let sum = 0;
// let cunt = 0;
// for (let i = 0; i < numbersArray.length; i++) {
//   sum += numbersArray[i];
//   cunt++;
// }
// const avarage = sum / cunt;
// console.log(`average = `, avarage);

let perfectNumbers = [];
function isPerfectNumber(num) {
  if (num <= 0) return;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num) {
    perfectNumbers.push(num);
  }
}
isPerfectNumber(23);
isPerfectNumber(6);
isPerfectNumber(24);
isPerfectNumber(61);
isPerfectNumber(28);

console.log(perfectNumbers);
