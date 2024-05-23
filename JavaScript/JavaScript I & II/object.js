// Memperbarui nilai dalam Array
const character = { name: 'Ninja Ken', age: 14 };

// Print nilai property name milik character
console.log(character.name);

// Gantikan nilai age milik character ke 20
character.age = 20;

// Print constant character ke console
console.log(character);

// ------------------------------------------------------ batas

// Array dalam Object
const characters = [
  { name: 'Ninja Ken', age: 14 },
  { name: 'Guru Domba', age: 100 },
  { name: 'Baby Ninja Ben', age: 5 },
];

// Selesaikan loop for dibawah
for (let i = 0; i < characters.length; i++) {
  console.log('--------------------');

  // Tentukan nilai constant character
  const character = characters[i];

  // Print "Nama saya adalah ____"
  console.log(`Nama saya adalah ${character.name}`);

  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
}
