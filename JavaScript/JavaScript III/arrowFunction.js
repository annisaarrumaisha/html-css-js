// MENULISKAN FUNCTION

// Tetapkan arrow function ke constant greet
const greet1 = () => {
  console.log('Halo!');
};

// Panggil function greet
greet1();

// ---------------------------------Batas

// Argument:
// Tambahkan parameter name ke function
const greet = (name) => {
  // Print pesan "Halo, ____"
  console.log(`Halo, ${name}`);
};

// Panggil function greet dengan "Guru Domba" sebagai argument
greet('Guru Domba');
