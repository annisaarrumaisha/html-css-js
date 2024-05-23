// Code Asynchronous

const printer = (data) => {
  console.log(data);
};

const power = (a, b) => {
  const result = a ** b;
  return result;
};

const result = power(3, 2);
printer(result);

/*
  Output:
  
  9
  
  */
