console.log("rajju mc");
createDeck();
//elements
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    //if notes is empty we will just make it an empty array
    notesObj = [];
  } else {
    //every time new array which stores the localStorage.notes--> it contains--> all previous input in addTxt
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notes);

  createDeck();
});

function createDeck(elements, index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    //if notes is empty we will just make it an empty array
    notesObj = [];
  } else {
    //every time new array which stores the localStorage.notes--> it contains--> all previous input in addTxt
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.map(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show! Use add note section to add notes.`;
  }
}

function deleteNote(index) {
  console.log("i am deleting");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  createDeck();
}
