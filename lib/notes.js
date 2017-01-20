require(["modules/add","modules/edit","modules/del","modules/save","modules/store"],
        function(add,edit,del,save,storage) {
          var list = document.getElementById("list");
          var addNotes = document.getElementById("addNotes");
          var notes = document.getElementById("notes");
          storage.buttons();
          list.addEventListener("click", function(e) {
            if (e.target.id=="create") { // Reveal and clear note creation area
              add("","");
            }
            else if (e.target.id=="all") { // Display all notes
              storage.every();
            }// Show all notes
            else {
              storage.retrieve(e.target.id.slice(1)); // Show note matching e.target.value
              e.target.className = e.target.className.replace("primary","primary basic");
            }
          });
          addNotes.addEventListener("click", function(e) {
            if (/save/.test(e.target.className)) { // Save Note
              save.store(); // Save the note
              save.wipe(); // Wipe the area
            }
            else if (/discard/.test(e.target.className)) { // Delete Note
              save.wipe();
            }
          });
          notes.addEventListener("click", function (e) {
            if (/edit/.test(e.target.className)) {
              edit(e.target.parentNode.parentNode.id);
            }
            else if (/delete/.test(e.target.className)) {
              del(e.target.parentNode.parentNode.id);
            }
            else if (/hide/.test(e.target.className)) {
              e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
              var tempButton = document.getElementById(" "+e.target.parentNode.parentNode.id);
              tempButton.className = tempButton.className.replace("primary basic","primary");
            }
          });
});
