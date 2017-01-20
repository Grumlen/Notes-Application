define(["modules/add"],function(add){
  return function(id) {
    var note = document.getElementById(id);
    var noteTitle = note.childNodes[0].textContent;
    var noteContents = note.childNodes[1].textContent;
    var addEdit = "Editing '"+noteTitle+"'";
    add(noteTitle,noteContents,id,addEdit);
  }
});
