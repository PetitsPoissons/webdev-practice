const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve('SUCCESS'), 1000);
  } else {
    reject('Error');
  }
});

myPromise
  .then((res) => res + '!!!')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
