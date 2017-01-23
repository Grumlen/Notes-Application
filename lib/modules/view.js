define(["modules/store","modules/builder"],function(storage,builder){
  var addNotes = document.getElementById("addNotes"),
      title = document.getElementById("title"),
      contents = document.getElementById("contents"),
      addTitle = document.getElementById("addTitle"),
      list = document.getElementById("list"),
      notes = document.getElementById("notes");
  function buttonCheck(id) {
    for(var i=0; i<list.childNodes.length; i++) {
      if (list.childNodes[i].id==" "+id) return false;
    }
    return true;
  }
  function noteChecker(id) {
    for(var i=1;i<notes.childNodes.length;i++) {
      if (notes.childNodes[i].lastChild.id==id) return false;
    }
    return true;
  }
  function add(titleText="",contentsText="",id,addEdit) { //
    title.value = titleText;
    contents.value = contentsText;
    if (addEdit) addTitle.innerText = addEdit;
    else addTitle.innerText = "Create Note";
    if (id) { title.className=id; }
    title.focus();
  }
  function rem(id) {
    var note = document.getElementById(id);
    note.parentNode.parentNode.removeChild(note.parentNode);
    for (var i=0;i<list.childNodes.length;i++) {
      if (list.childNodes[i].id == " "+id) {
        list.removeChild(list.childNodes[i]);
      }
    }
    storage.rem(id);
  }
  function edit(id) {
    var note = document.getElementById(id);
        titleText = note.childNodes[0].textContent;
        contentsText = note.childNodes[1].textContent;
        editTitle = "Editing '"+titleText+"'";
    add(titleText,contentsText,id,editTitle);
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
      note.parentNode.parentNode.removeChild(note.parentNode);
      storage.retrieve(time);
    }
  }
  function wipe() {
    title.value = "";
    contents.value = "";
    addTitle.innerText = "Create Note";
  }
  function show(id) {
    if (noteChecker(id)) storage.retrieve(id); // Show note matching e.target.value
    var noteButton = document.getElementById(" "+id);
    noteButton.className = noteButton.className.replace("primary","primary basic");
  }
  function hide(id) {
    var noteButton = document.getElementById(" "+id),
        note = document.getElementById(id);
    note.parentNode.parentNode.removeChild(note.parentNode);
    noteButton.className = noteButton.className.replace("primary basic","primary");
  }
  function every() {
    var idArray = storage.every();
    for (var i=0;i<idArray.length;i++) {
      show(idArray[i]);
    }
  }
  return {
    add,
    rem,
    edit,
    save,
    show,
    hide,
    wipe,
    every
  };
})
