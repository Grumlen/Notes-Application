define([],function(){
  var notes = document.getElementById("notes"),
      list = document.getElementById("list");
  function newNote(id, noteObject) {
    var note = document.createElement("div"),
        title = document.createElement("h2"),
        contents = document.createElement("p"),
        dates = document.createElement("p"),
        buttons = document.createElement("div"),
        removeButton = document.createElement("button"),
        editButton = document.createElement("button"),
        hideButton = document.createElement("button"),
        editIcon = document.createElement("i"),
        removeIcon = document.createElement("i"),
        hideIcon = document.createElement("i");
    note.id = id;
    note.className = "note";
    title.innerText = noteObject.title;
    contents.innerText = noteObject.contents;
    if (noteObject.lastEdit) dates.innerText = "Created: "+noteObject.created+"\nLast Edit: "+noteObject.lastEdit;
    else dates.innerText = "Created: "+noteObject.created;
    dates.className = "date";
    buttons.className = "ui icon buttons right floated";
    removeButton.className = "ui primary icon button remove";
    editButton.className = "ui primary icon button edit";
    hideButton.className = "ui primary icon button hide";
    removeIcon.className = "remove circle icon";
    editIcon.className = "edit icon";
    hideIcon.className = "hide icon";
    note.appendChild(title);
    note.appendChild(contents);
    note.appendChild(dates);
    buttons.appendChild(editButton);
    buttons.appendChild(hideButton);
    buttons.appendChild(removeButton);
    removeButton.appendChild(removeIcon);
    editButton.appendChild(editIcon);
    hideButton.appendChild(hideIcon);
    note.appendChild(buttons);
    notes.appendChild(note);
  }
  function changeNote(id,title,contents) {

  }
  function newButton(id,title) {
    var noteButton = document.createElement("button");
    noteButton.className = "ui primary button";
    noteButton.id = " "+id;
    noteButton.innerText = title;
    list.appendChild(noteButton);
  }
  function changeButton(id,title) {
    var noteButton = document.getElementById(" "+id);
    noteButton.innerText = title;
    list.appendChild(noteButton);
  }
  return {
    newNote,
    changeNote,
    newButton,
    changeButton
  }
});
