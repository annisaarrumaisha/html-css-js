const printer = (data) => {
  console.log(data);
};

const power = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a ** b;
      resolve(result);
    }, 1000);
  });
};

const getResult = async () => {
  try {
    const result1 = await power(3, 2);
    const result2 = await power(result1, 2);
    const result3 = await power(result2, 2);
    printer(result3);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Async/Await telah selesai!');
  }
};

getResult();

/**
  Output:
  
  6561
  Async/Await telah selesai!
  */
