const numbersArray = [12, 13, 14, 15, 16];
let sum = 0;
let cunt = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
  cunt++;
}
const avarage = sum / cunt;
console.log(`average = `, avarage);
