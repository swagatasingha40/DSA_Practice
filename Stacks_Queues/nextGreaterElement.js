//traverse through the array + imaginary twice the array, hence i % n for positions
//if stack is not empty and contains element lesser than cuurent pop
//traverse only till length n because that's what we need and if not empty nge[i] will be last element of stack and if it is empty push -1
//in the end push current element to stack

function nextGreaterElement(arr, n) {
  const stackArr = [];
  const nge = [];
  for (i = 2 * n - 1; i >= 0; i--) {
    while (
      stackArr.length !== 0 &&
      arr[i % n] >= stackArr[stackArr.length - 1]
    ) {
      stackArr.pop();
    }
    if (i < n) {
      if (stackArr.length != 0) {
        nge[i] = stackArr[stackArr.length - 1];
      } else {
        nge[i] = -1;
      }
    }
    stackArr.push(arr[i % n]);
  }
  return nge;
}

const arrayInput = [5, 7, 1, 7, 6, 0];
const finalAns = nextGreaterElement(arrayInput, arrayInput.length);
console.log(finalAns);
