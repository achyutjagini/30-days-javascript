
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

//When comparing arrays, if the arrays have the same values but are different objects in memory,
// then the comparison nums == numbers would return false. This is because the double equals
// operator checks if the references to the arrays are the same, and since nums and
// numbers are different arrays, their references are different and
// the comparison returns false.

//The triple equals operator (===) in JavaScript is used to check both 
//the value and the type of an object.
// It returns true if both the value and the type of the objects
 // being compared are equal, and false otherwise.
let nums1 = [1, 2, 3]
let numbers1 = [1, 2, 3]
console.log(nums1 == numbers1) // false

let nums2 = [1, 2, 3]
let numbers2 = [1, 2, 3]
console.log(nums2 === numbers2) 

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numbers = nums
console.log(nums == numbers)  // true
/*
let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true*/