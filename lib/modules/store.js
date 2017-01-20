define(["modules/builder"],function(builder){
  var notes = document.getElementById("notes");
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
    store: function (id,title,contents) {
      if (!(noteObject[id])) noteObject[id] = { created: id };
      else noteObject[id].lastEdit = Date();
      noteObject[id].title = title;
      noteObject[id].contents = contents;
      localStorage.setItem("myNotes", JSON.stringify(noteObject));
    },
    retrieve: function(id) {
      if (noteChecker(id) && noteObject[id]) builder.newNote(id,noteObject[id]);
    },
    every: function() {
      for (var id in noteObject) {
        if (noteChecker(id)) builder.newNote(id,noteObject[id]);
      }
    },
    rem: function(id) {
      delete noteObject[id]
      localStorage.setItem("myNotes", JSON.stringify(noteObject));
    },
    buttons: function() {
      for (var id in noteObject) {
        builder.newButton(id,noteObject[id].title);
      }
    }
  }
});
