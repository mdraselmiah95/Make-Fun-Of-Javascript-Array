/**
 * @title :UnderStanding Iterable Object ✈️
 */

const makeRangeIterable = (start = 0, end = Infinity, step = 1) => {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
};

const it = makeRangeIterable(1, 10, 2);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}

console.log("Iteration Over", result.value);
