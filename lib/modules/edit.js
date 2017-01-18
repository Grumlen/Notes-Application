define(["modules/add"],function(add){
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  return function(id) {
    var note = document.getElementById(id);
    var noteTitle = note.childNodes[0].textContent;
    var noteContents = note.childNodes[1].textContent;
    add(noteTitle,noteContents,id);
    note.parentNode.removeChild(note);
  }
});
