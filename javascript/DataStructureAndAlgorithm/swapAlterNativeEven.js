let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let size = arr.length;
function swapEven(arr, size) {
  let temp = 0;
  for (let i = 0; i < size; i += 2) {
    if (i + 1 < size) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

    }
  }
}

swapEven(arr, size);


console.log(arr);