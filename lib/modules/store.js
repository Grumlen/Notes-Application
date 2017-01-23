define(["modules/builder"],function(builder){
  if(localStorage.getItem("myNotes")) {
    var noteObject = JSON.parse(localStorage.getItem("myNotes"));
  }
  else var noteObject = {};
  return {
    store: function (id,title,contents) {
      if (!(noteObject[id])) noteObject[id] = { created: id };
      else noteObject[id].lastEdit = Date();
      noteObject[id].title = title;
      noteObject[id].contents = contents;
      localStorage.setItem("myNotes", JSON.stringify(noteObject));
    },
    retrieve: function(id) {
      if (noteObject[id]) return builder.newNote(id,noteObject[id]);
    },
    every: function() {
      var idArray = [];
      for (var id in noteObject) {
        idArray.push(id);
      }
      return idArray;
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
