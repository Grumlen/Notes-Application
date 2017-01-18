define(["modules/store"],function(storage){
  var list = document.getElementById("list");
  return function(id) {
    var note = document.getElementById(id);
    note.parentNode.removeChild(note);
    for (var i=0;i<list.childNodes.length;i++) {
      if (list.childNodes[i].className == "ui primary button "+id) {
        list.removeChild(list.childNodes[i]);
      }
    }
    storage.remove(id);
  }
});
