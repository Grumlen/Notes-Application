define(["modules/notebuilder"],function(noteBuilder){
  var notes = document.getElementById("notes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var noteObject = {};
  function noteChecker(id) {
    for(var i=0;i<notes.childNodes.length;i++) {
      if (notes.childNodes[i].id==id) return false;
    }
    return true;
  }
  return {
    store: function (id) {
      noteObject.created = id;
      noteObject.title = title.value;
      noteObject.contents = contents.value;
      noteObject.lastEdit = Date();
      localStorage.setItem(id, JSON.stringify(noteObject));
    },
    retrieve: function(id) {
      if (noteChecker(id) && localStorage[id]) noteBuilder(id,JSON.parse(localStorage.getItem(id)));
    },
    every: function() {
      for (var id in localStorage) {
        if (noteChecker(id)) noteBuilder(id,JSON.parse(localStorage.getItem(id)));
      }
    },
    remove: function(id) {
      localStorage.removeItem(id);
    }
  }
});
