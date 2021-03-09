// Array Methods
// push, pop back
// unshift, shift front
//var arr = [1,2,3,4,15];
//var strarr = ['z', 'l', 'a', 'd'];
//arr.push(5);
//arr.unshift(6);
// typeof arr;
// Array.isArray(arr);
// arr.reverse();
// arr.sort();
// strarr.sort();
// sort works only based on first element, so it won't work with numbers bigger than 10

// arr.sort(sorting);
// function sorting(a, b) {
//   return a - b
// }
// arr.concat(strarr);

//var str1 = 'asyl';
//var str2 = 'bek';

// var name = str1 + str2;
// name;

// arr.slice(0, 4) // copying
// var rem = arr.splice(0, 4) //cutting

// var arr = ['1',1,2,'1',{},[],null,3]
// create function that returns [1,2,3]


// var arr = [1,2,3,4,5,6,7];

// function remove(arr) {
//   var newarr = [];
//   for(var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       newarr.push(arr[i])
//     } 
//   }
//   return newarr;
// }
//remove(arr);

// function removebyone(arr) {
//   while(arr.length > 0) {
//     arr.pop();
//     arr.shift();
//   }
//   return arr;
// }
//removebyone(arr);

//var arr = [1,2,3,4,5,6,7];

// function reverse(arr) {
//   var newarr = [];
//   while (arr.length) {
//     newarr.push(arr.pop());
//   }
//   return newarr;
// }
// reverse(arr);

// function getNum(arr) {
//   var newarr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0 & arr[i] > 2) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }
// getNum(arr);

// function random(arr) {
//   var newarr = [];
//   while(arr.length) { 
//     newarr.push(arr.pop());
//     if (arr.length) {
//       newarr.push(arr.shift());
//     }
//     console.log(newarr);
//   }
//   return newarr;
// }
// random(arr);

// need to return indexes of array if target is 7 it should return index of 2 and 7

// var arr = [3,2,4];

// var target = 6;

// function twoSum(arr, target) {
//   var newarr = [];

//   for(var i = 0; i < arr.length; i++) {
//     for(var j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) { 
//         newarr.push(i);
//         newarr.push(j);
//       }
//     }
//   }
//   return newarr;
// }

// twoSum(arr, target);

// July 16, 2019
// indexOf, includes, forEach, filter, map, sort, reverse, join, some, every, reduce, 

// var arr = [1,2,4,6,7,2,3];

// var filteredArr = arr.filter(filtered);

// function filtered(el) {
//   if (el < 4) {
//     return true
//   }
// }

// filteredArr;

var arr = ['a', 'b', 'c', 'a', 'd']; // ['A', 'B', 'C', 'A', 'D']

function capital(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr;
}

capital(arr);

/*find the Highest price object*/
// const data = {
//   name: "Brunello Cucinelli",
//   shoes: [
//     {name: "black low-top", price: 1000},
//     {name: "green low-top", price: 1100},
//     {name: "beige low-top", price: 950},
//     {name: "olive low-top", price: 1050}
//   ]
// };

// function getPriceMax(data) {
//   let priceMax = data.shoes[0];

//   for(let i = 1; i < data.shoes.length; i++) {
//     if(data.shoes[i].price > priceMax.price) {
//       priceMax = data.shoes[i];
//     }
//   }
//   return priceMax;
// }

// getPriceMax(data);

/*
url: http://learn.seytech.co/courses/practice/algorithms
1: Find the Highest Value in a given array
loop & sort
*/
const arr = [3,5,2,1,6,9];

function findMax(arr) {
  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}

findMax(arr);

function findMaxSort(arr) {
  arr.sort();

  return arr[arr.length - 1];
}

findMaxSort(arr);
