require(["modules/view","modules/store"],
  function(view,storage) {
    var list = document.getElementById("list"),
        addNotes = document.getElementById("addNotes"),
        notes = document.getElementById("notes");
    storage.buttons(); // Generate buttons from localStorage
    list.addEventListener("click", function(e) { // Listener for button menu
      if (e.target.id=="create") { // Clear note creation area
        view.add();
      }
      else if (e.target.id=="all") { // Display all notes
        view.every();
      }
      else {
        view.show(e.target.id.slice(1));
      }
    });
    addNotes.addEventListener("click", function(e) { // Listener for note editing area
      if (e.target.classList.contains("save")) { // Save Note
        view.save(); // Save the note
        view.wipe(); // Wipe the area
      }
      else if (e.target.classList.contains("discard")) { // Delete Note
      view.wipe();
      }
    });
    notes.addEventListener("click", function (e) { // Listener for saved notes
      if (e.target.classList.contains("edit")) {
        var note = e.target.parentNode.parentNode;
        if (!e.target.classList.contains("button")) note = note.parentNode; // Check for icon click
        view.edit(note.id); // Edit the note
      }
      if (e.target.classList.contains("remove")) {
        var note = e.target.parentNode.parentNode;
        if (!e.target.classList.contains("button")) note = note.parentNode; // Check for icon click
        view.rem(note.id); // Delete the note
      }
      if (e.target.classList.contains("hide")) {
        var note = e.target.parentNode.parentNode;
        if (!e.target.classList.contains("button")) note = note.parentNode; // Check for icon click
        view.hide(note.id); // Hide the note
      }
    });
  }
);
