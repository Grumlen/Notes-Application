define(["modules/store","modules/builder"],function(storage,builder){
  var addNotes = document.getElementById("addNotes"),
      title = document.getElementById("title"),
      contents = document.getElementById("contents"),
      addTitle = document.getElementById("addTitle"),
      list = document.getElementById("list");
  function buttonCheck(id) {
    for(var i=0; i<list.childNodes.length; i++) {
      if (list.childNodes[i].id==" "+id) return false;
    }
    return true;
  }
  function add(title,contents,id,addEdit) { //
    title.value = title;
    contents.value = contents;
    if (addEdit) addTitle.innerText = addEdit;
    else addTitle.innerText = "Create Note";
    if (id) { title.className=id; }
    title.focus();
  }
  function rem(id) {
    var note = document.getElementById(id);
    note.parentNode.removeChild(note);
    for (var i=0;i<list.childNodes.length;i++) {
      if (list.childNodes[i].id == " "+id) {
        list.removeChild(list.childNodes[i]);
      }
    }
    storage.rem(id);
  }
  function edit(id) {
    var note = document.getElementById(id);
        title = note.childNodes[0].textContent;
        contents = note.childNodes[1].textContent;
        editTitle = "Editing '"+title+"'";
    add(title,contents,id,editTitle);
  }
  function save() {
    var time = Date();
    if (title.className!="") {
      time = title.className;
    }
    title.className = "";
    storage.store(time,title.value,contents.value);
    if (buttonCheck(time)) builder.newButton(time,title.value);
    else builder.changeButton(time,title.value);
    var noteButton = document.getElementById(" "+time),
        note = document.getElementById(time);
    if (note) {
      note.parentNode.removeChild(note);
      storage.retrieve(time);
    }
  }
  function wipe() {
    title.value = "";
    contents.value = "";
    addTitle.innerText = "Create Note";
  }
  function show(id) {
    var noteButton = document.getElementById(" "+id);
    storage.retrieve(id); // Show note matching e.target.value
    noteButton.className = noteButton.className.replace("primary","primary basic");
  }
  function hide(id) {
    var noteButton = document.getElementById(" "+id),
        note = document.getElementById(id);
    note.parentNode.removeChild(note);
    noteButton.className = noteButton.className.replace("primary basic","primary");
  }
  return {
    add,
    rem,
    edit,
    save,
    show,
    hide,
    wipe
  };
})
