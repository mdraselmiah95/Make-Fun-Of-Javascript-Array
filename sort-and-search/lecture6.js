/**
 * @title :Understand and Implement Binary Search 🏇
 * @definition :Binary Search is a searching technique which works on the Divide and Conquer approach 🥈
 */

let arr = [12, 35, 3, 66, 8, 9, 13, 19, 22, 7, 18, 5, 1];

const binarySearch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest - highest) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }
  return -1;
};
