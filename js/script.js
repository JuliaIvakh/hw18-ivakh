//Task 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//Task 2
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);

//Task 3
const arrayEnd = [1, 2, 3];
arrayEnd.push(4, 5, 6);
console.log(arrayEnd);

//Task 4
const arrayStart = [1, 2, 3];
arrayStart.unshift(4, 5, 6);
console.log(arrayStart);

//Task 5
const arr5 = ["js", "css", "jq"];
const firstEl = arr5.shift(0);
console.log(firstEl);

//Task 6
const arr6 = ["js", "css", "jq"];
const lastEl = arr6.pop(0);
console.log(lastEl);

//Task 7
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.splice(0, 3);
console.log(newArr7);

//Task 8
const arr8 = [1, 2, 3, 4, 5];
const newArr8 = arr8.splice(-2);
console.log(newArr8);

//Task 9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

//Task 10
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(0, 1);
arr10.splice(arr10.length - 1, 1);
console.log(arr10);

//Task 11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, "a", "b", "c");
console.log(arr11);

//Task 12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, "a", "b");
arr12.splice(6, 0, "c");
arr12.splice(arr12.length, 0, "e");
console.log(arr12);

//Task 13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

//Task 14
const arr14 = [5, 6, 7, 8, 9];
const result14 = arr14.reduce((sum, curr) => sum + curr, 0);
console.log(result14);

//Task 15
const arr15 = [5, 6, 7, 8, 9];
const result15 = arr15.map((x) => Math.pow(x, 2));
console.log(result15);

//Task 16
const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
const result16 = arr16.filter((item) => item > 0);
console.log(result16);

//Task 17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const result17 = arr17.filter((item) => item % 2 === 0);
console.log(result17);

//Task 18
const arr18 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
const result18 = arr18.filter((item) => item.length > 5);
console.log(result18);

//Task 19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const result19 = arr19.filter((item) => Array.isArray(item));
console.log(result19);

//Task 20
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
const result20 = arr20.filter((item) => item < 0);
console.log(result20.length);
