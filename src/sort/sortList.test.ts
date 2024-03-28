import { Sort } from "./sortList";
import { generateArray } from "./utils";

const inputs = generateArray(10)

// console.log(new Sort().selectSort(inputs))

// console.log(new Sort().bubbleSort(inputs))

console.log(new Sort().selectSort(inputs))