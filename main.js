"use strict";

const getData = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("hello world"), 2000)
  );
};
const processData = async () => {
  const data = await getData();
  console.log(data);
};
processData();

const myFunction = (input) => {
  return new Promise((reject, resolve) => {
    if (typeof input != "number") {
      reject(Error("data is not a number"));
    } else if (input % 2 == 0) {
      setTimeout(() => resolve("even"), 2000);
    } else setTimeout(() => resolve("odd"), 1000);
  });
};
myFunction("a")
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
myFunction(2)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
myFunction(3)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
