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

power(3, 2)
  .then((res) => {
    return power(res, 2);
  })
  .then((res) => {
    return power(res, 2);
  })
  .then((res) => {
    printer(res);
    return power(res, 2);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Promise telah selesai!');
  });

/*
  Output:
  
  6561
  Promise telah selesai!
  
  */
