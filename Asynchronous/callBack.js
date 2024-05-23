const printer = (data) => {
  console.log(data);
};

const power = (a, b, callback) => {
  setTimeout(() => {
    const result = a ** b;
    callback(result);
  }, 1000);
};

power(3, 2, printer);

/*
  Output:
  
  9
  
  */
