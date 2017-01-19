define(["modules/notebuilder"],function(noteBuilder){
  var notes = document.getElementById("notes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  if(localStorage.getItem("myNotes")) {
    var noteObject = JSON.parse(localStorage.getItem("myNotes"));
  }
  else var noteObject = {};
  function noteChecker(id) {
    for(var i=0;i<notes.childNodes.length;i++) {
      if (notes.childNodes[i].id==id) return false;
    }
    return true;
  }
  return {
    store: function (id) {
      noteObject[id] = {
        created: id,
        title: title.value,
        contents: contents.value,
        lastEdit: Date()
      }
      localStorage.setItem("myNotes", JSON.stringify(noteObject));
    },
    retrieve: function(id) {
      if (noteChecker(id) && noteObject[id]) noteBuilder(id,noteObject[id]);
    },
    every: function() {
      for (var id in noteObject) {
        if (noteChecker(id)) noteBuilder(id,noteObject[id]);
      }
    },
    remove: function(id) {
      delete noteObject[id]
      localStorage.setItem("myNotes", JSON.stringify(noteObject));
    },
    buttons: function() {
      for (var id in noteObject) {
        var noteButton = document.createElement("button");
        noteButton.className = "ui primary button "+id;
        noteButton.innerText = noteObject[id].title;
        list.appendChild(noteButton);
      }
    }
  }
});
