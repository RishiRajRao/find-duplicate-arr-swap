function findDup(arr) {
  // let i = 0;
  while (arr[0] !== arr[arr[0]]) {
    let nxt = arr[arr[0]];
    arr[arr[0]] = arr[0];
    arr[0] = nxt;
  }
  return arr[0];
}

findDup([1, 3, 4, 2, 2]);
