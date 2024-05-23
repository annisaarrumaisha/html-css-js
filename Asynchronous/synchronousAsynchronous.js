// Code Synchronous:

console.log('Halo');
console.log('Javascript');
console.log('Progate');

/*
Output:

Halo
Javascript
Progate
**/

// -------------------------------------BATAS---------------------------------------------//

// Code Asynchronous:
console.log('Halo');
// menunda eksekusi selama 500 ms
setTimeout(() => {
  console.log('Javascript');
}, 500);
console.log('Progate');

/*
Output:

Halo
Progate
Javascript
*/
