define(["modules/store"],function(storage){
  var addNotes = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var list = document.getElementById("list");
  var addTitle = document.getElementById("addTitle");
  function buttonCheck(id) {
    for(var i=0; i<list.childNodes.length; i++) {
      if (list.childNodes[i].id==" "+id) return false;
    }
    return true;
  }
  return {
    store: function() {
      var time = Date();
      var edit = time;
      if (title.className!="") {
        time = title.className;
      }
      title.className = "";
      storage.store(time,edit);
      if (buttonCheck(time)){
        var noteButton = document.createElement("button");
        noteButton.className = "ui primary button";
        noteButton.id = " "+time;
        list.appendChild(noteButton);
      }
      else {
        var noteButton = document.getElementById(" "+time);
        var note = document.getElementById(time);
        if (note) {
          note.parentNode.removeChild(note);
          storage.retrieve(time);
        }
      }
      noteButton.innerText = title.value;
    },
    wipe: function() {
      title.value = "";
      contents.value = "";
      addTitle.innerText = "Create Note";
    }
  }
});
