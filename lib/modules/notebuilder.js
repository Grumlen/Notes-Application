define([],function(){
  return function(id, noteObject) {
    var note = document.createElement("div");
    var title = document.createElement("h2");
    var contents = document.createElement("p");
    var dates = document.createElement("p");
    var buttons = document.createElement("div");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");
    var hideButton = document.createElement("button");
    note.id = id;
    note.className = "note";
    title.innerText = noteObject.title;
    contents.innerText = noteObject.contents;
    if (noteObject.create+""==noteObject.lastEdit+"") dates.innerText = "Created: "+noteObject.created;
    else dates.innerText = "Created: "+noteObject.created+"\nLast Edit: "+noteObject.lastEdit;
    dates.className = "date";
    deleteButton.className = "ui primary button delete";
    editButton.className = "ui primary button edit";
    hideButton.className = "ui primary button hide";
    deleteButton.innerText = "Delete";
    editButton.innerText = "Edit";
    hideButton.innerText = "Hide";
    note.appendChild(title);
    note.appendChild(contents);
    note.appendChild(dates);
    buttons.appendChild(deleteButton);
    buttons.appendChild(editButton);
    buttons.appendChild(hideButton);
    note.appendChild(buttons);
    notes.appendChild(note);
  }
});
