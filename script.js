//script.js
var coll = document.getElementsByClassName("togglebutton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var todolist = this.nextElementSibling;
    if (todolist.style.display === "block") {
      todolist.style.display = "none";
    } else {
      todolist.style.display = "block";
    }
  });
}

const message = "Hello world"; // Try edit me

// Update header text
document.querySelector("#header").innerHTML = message;

// Log to console
console.log(message);

//ARRAYS
//sort,filter,find,index,trim,splice,
