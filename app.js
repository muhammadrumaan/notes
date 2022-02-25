let textInput=document.getElementById('textarea');
let addBtn=document.getElementById('addbtn');
let saveBtn=document.getElementById('savebtn');
let html=localStorage.getItem('Addeddivs') || "";
let prevnote= JSON.parse(localStorage.getItem('Notes'));
let notesObj= prevnote || [];
let toDoAdd=document.querySelector('.todo-add-container');
toDoAdd.innerHTML=html;
let noNotes=document.querySelector('.nonotes-txt');
if (prevnote.length==0) {
  noNotes.innerHTML=`<h3><em>NO ToDo's, Add One</em></h3>`;
}
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
      <button class="Editbtn" id="${index+1}" onclick="editNotes(this.id)">Edit</button>
      </div>`
        
    })
    
    noNotes.innerHTML="";
    
    
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
    prevnote= JSON.parse(localStorage.getItem('Notes'));
    // notesObj= prevnote || [];
    html="";
    Array.from(notesObj).forEach(function (element,index) {
        
        html+= `<div class="todo" >
      <p>${element}</p>
      <button class="addbtn" id="${index}" onclick="delNotes(this.id)">Delete</button>
      <button class="Editbtn" id="${index+1}" onclick="editNotes(this.id)">Edit</button>
      </div>`
        
    })
    toDoAdd.innerHTML=html;
    localStorage.setItem('Addeddivs',html);
    console.log(localStorage.getItem('Addeddivs'));
    if (prevnote.length==0) {
      noNotes.innerHTML=`<h3><em>NO ToDo's, Add One</em></h3>`;
    }
    

    
}
function editNotes(index) {
  saveBtn.style.display="block";
  addBtn.style.display="none";
  textInput.value= notesObj[index-1];
  indval=index-1;
  textInput.focus();
  
  
}
saveBtn.addEventListener('click',function (element) {
  //  alert(textInput.value);
   notesObj[indval]=textInput.value;
   console.log(notesObj);


   localStorage.setItem('Notes',JSON.stringify(notesObj));
    prevnote= JSON.parse(localStorage.getItem('Notes'));
    // notesObj= prevnote || [];
    html="";
    Array.from(notesObj).forEach(function (element,index) {
        
        html+= `<div class="todo" >
      <p>${element}</p>
      <button class="addbtn" id="${index}" onclick="delNotes(this.id)">Delete</button>
      <button class="Editbtn" id="${index+1}" onclick="editNotes(this.id)">Edit</button>
      </div>`
        
    })
    toDoAdd.innerHTML=html;
    localStorage.setItem('Addeddivs',html);
    console.log(localStorage.getItem('Addeddivs'));

    textInput.value="";
    saveBtn.style.display="none";
    addBtn.style.display="block";





})



