function moveZeros(arr) {
  const resultOne = []
  const resultTwo = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      resultOne.push(arr[i]);
    } else {
      resultTwo.push(arr[i]);
    }
  }

  return resultTwo.concat(resultOne);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
