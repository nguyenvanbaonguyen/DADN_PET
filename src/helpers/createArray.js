const createArray = n => [...Array(n).keys()];

export const createArrayPro = (n, a = 0) => {
  const myArr = [];
  for (let i = 0; i < n; i++) {
    myArr.push(i + a);
  }
  return myArr;
};
export default createArray;
