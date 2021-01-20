// Define the Term "Closure"
// In the previous example, we could call the "inner" function, the anonymous function a "closure." It "encloses" the function-level scope of its parent. And, like a backpack, it can carry out the knowledge that it saw - even when you're out of the parent's scope.
// Recall the IIFE discussion, since what's inside an IIFE can't be seen, if we wanted to let just tiny bits of information leak back out, we might want to pass that information back out, through a closure.
// Note: We're also using destructuring assignment, don't forget your ES6 tools!
let [answer, theBase] = (
  function(thingToAdd) {
    let base = 3
    return [
      function() { return base + thingToAdd },
      function() { return base }
    ]
  }
)(2)

let arrayOfStudents = ["Madeline", "Mike R", "Mike I", "Randi"]

let [madeline, miker, miki, randi] = arrayOfStudents

madline = "Madeline"

answer() //=> 5
console.log(`The base was ${theBase()}`)
// OUTPUT: The base was 3





function deliCounterCreator(){
  let count = 0
  return [
    function(){
    count++
    return count
  },
    function (){
      return count
    }
  ]
}


//

let studentList = document.getElementById('student-list')

let studentArray = [{id: 1, name: "Michael I", homeroom: "Science"}, {id: 2, name: "Randi", homeroom: "Physics"}, {name: "Madeline", homeroom: "Photography"}, {name: "Michael R", homeroom: "History"}]

studentArray.forEach(addStudentToList)

function addStudentToList({ id, name, homeroom }){
  // let {name, homeroom} = object
  studentList.innerHTML += `<li data-id=${id}>${name} - ${homeroom}</li>`
}

// document.createElement('div')
//
// class Student{
//   constructor(id, name, homeroom, bio, gpa){
//     this.id = id
//     this.name = name
//     this.homeroom = homeroom
//     this.bio = bio
//     this.gpa
//     this.studentDiv = document.createElement('div')
//
//     this.studentDiv.addEventListener('click', showBioAndGPA)
//   }
// }
//ruby
// studentArray.each do |object|
//   studentList.innerHTML += `<li>${object.name} - ${object.homeroom}</li>`
// end

//<li>Name - Homeroom</li>

//callback functions are functions passed as arguments to other methods or functions that that method or function that the callback is being passed to will use at a later time

//methods that accept callback functions:
//.map, .filter, .find, .forEach
//.then
//addEventListener('event', callback)
//setTimeout(callback, time)
//setInterval(callback, timeForHowOften)




























//
