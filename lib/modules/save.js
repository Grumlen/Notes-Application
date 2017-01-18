define(["modules/store"],function(storage){
  var addNotes = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var list = document.getElementById("list");
  var regCheck;
  function buttonCheck(id) {
    for(var i=0; i<list.childNodes.length; i++) {
      regCheck = new RegExp(id);
      if (list.childNodes[i].className=="ui primary button "+id) return false;
    }
    return true;
  }
  return {
    store: function() {
      var time;
      if (title.className!="") {
        time = title.className;
      }
      else time = Date();
      title.className = "";
      storage.store(time);
      if (buttonCheck(time)){
        var noteButton = document.createElement("button");
        noteButton.className = "ui primary button "+time;
        list.appendChild(noteButton);
      }
      else {
        var noteButton = document.getElementsByClassName("ui primary button "+time)[0];
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
      addNotes.className = "hidden";
    }
  }
});
