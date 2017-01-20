define([],function(){
  var addNotes = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var addTitle = document.getElementById("addTitle");
  return function(noteTitle,noteContents,id,addEdit) {
    title.value = noteTitle;
    contents.value = noteContents;
    if (addEdit) addTitle.innerText = addEdit;
    else addTitle.innerText = "Create Note";
    if (id) { title.className=id; }
    title.focus();
  };
})
