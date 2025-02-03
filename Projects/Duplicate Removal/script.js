'use strict';

const arr = [1, 2, 3, 4, 3, 2, 5, 6, 4, 7,  8, 9];

const strArr = ['Muhammad', 'Aliyu', 'Maryam', 'Aliyu', 'Maryam', 'Khadijah'];


 const arrResult = [...new Set(arr)];
  const strArrResult = [...new Set(strArr)];

 console.log(arrResult);
 console.log(strArrResult);


//  FINDING THE LARGEST PRIME NUMBER IN AN ARRAY

const ar = [2, 3, 4, 6, 8, 10, 12, 4];

function isPrime(number) {
    if(number % 2 === 0) return false;


}
 
 