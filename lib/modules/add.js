define([],function(){
  var addNotes = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  return function(noteTitle,noteContents,id) {
      title.value = noteTitle;
      contents.value =noteContents;
      addNotes.className = "";
      if (id) { title.className=id; }
      title.focus();
  };
})
