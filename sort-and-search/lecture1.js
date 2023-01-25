/**
 * @title :Understand the concept of Sorting 🎊
 * @definition :The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
 */

// TODO: Common Sorting Algorithms in JavaScript
/**
 * Bubble Sort
 * Selection Sort
 * Insertion Sort
 * Merge Sort
 * Quick Sort
 * Bucket Sort
 */

const names = [
  "Angelina Jolie",
  "Scarlett Johansson",
  "Jennifer Lawrence",
  "Emily Blunt",
  "Elizabeth Olsen",
  "Zendaya",
  "Anya Taylor-Joy",
  "Shailene Woodley",
];

/**
 * @title :Implement Bubble Sort
 * @@definition :Bubble sort is a sorting algorithm that compares adjacent elements and swaps them if they do not follow the desired order.
 */

let myArray = [9, 1, 4, 6, 8, 9, 30, 22, 3, 4, 53, 76, 57, 8, 23, 34, 33, 223];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
console.log("UnSorted", myArray);
bubbleSort(myArray);
console.log("Sorted", myArray);
