let textInput=document.getElementById('textarea');
let addBtn=document.getElementById('addbtn');
let html=localStorage.getItem('Addeddivs') || "";
let prevnote= JSON.parse(localStorage.getItem('Notes'));
let notesObj= prevnote || [];
let toDoAdd=document.querySelector('.todo-add-container');
toDoAdd.innerHTML=html;
addBtn.addEventListener('click',function(element) {
    let textValue=textInput.value;
    console.log(textValue);
    // let prevnote= JSON.parse(localStorage.getItem('Notes'));
    // let notesObj= prevnote || [];
    notesObj.push(textValue);
    localStorage.setItem('Notes',JSON.stringify(notesObj));
    console.log(notesObj);
    html="";
    
    Array.from(notesObj).forEach(function (element,index) {
        
        html+= `<div class="todo" >
      <p>${element}</p>
      <button class="addbtn" id="${index}" onclick="delNotes(this.id)">Delete</button>
      </div>`
        
    })
    

    textInput.value="";
    toDoAdd.innerHTML=html;
    localStorage.setItem('Addeddivs',html);
    console.log(localStorage.getItem('Addeddivs'));
    

})


    

function delNotes(index) {
    console.log("im getting deleted",index);
    notesObj.splice(index,1);
    console.log(notesObj);
    localStorage.setItem('Notes',JSON.stringify(notesObj));
    // prevnote= JSON.parse(localStorage.getItem('Notes'));
    // notesObj= prevnote || [];
    html="";
    Array.from(notesObj).forEach(function (element,index) {
        
        html+= `<div class="todo" >
      <p>${element}</p>
      <button class="addbtn" id="${index}" onclick="delNotes(this.id)">Delete</button>
      </div>`
        
    })
    toDoAdd.innerHTML=html;
    localStorage.setItem('Addeddivs',html);
    console.log(localStorage.getItem('Addeddivs'));
    

    
}

