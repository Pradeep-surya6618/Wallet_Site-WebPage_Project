//Image Change 1
function changeImageone(){
    var img = document.getElementById('image');
    img.src='./Images/Change-1.png';
}
//Image Change 2
function changeImagetwo(){
    var img = document.getElementById('image');
    img.src='./Images/Change-2.png';
}
//Image Change 3
function changeImagethree(){
    var img = document.getElementById('image');
    img.src='./Images/Change-3.png';
}

//Accordion
const questions = document.querySelectorAll('.question-answer');
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !==question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

//Form
var myForm = document.getElementById('myForm');
myForm.addEventListener("submit",function(event){
    event.preventDefault();

    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    let Message = document.getElementById('Message').value;

    document.write("User Name :",  Name);document.write("<br/>");document.write("<br/>")
    document.write("User Email :", Email);document.write("<br/>");document.write("<br/>")
    document.write("User Message :", Message);
})