function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  