const form = document.querySelector('#add');
const list = document.querySelector('#list');
const input = document.querySelector('#add-input');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = e.target[0].value;
  // console.log(inputValue);
  if (!inputValue) return;
  const clonedList = document.querySelector('#list li').cloneNode(true);
  clonedList.firstElementChild.textContent = inputValue;
  list.appendChild(clonedList);

  e.target[0].value = '';
});

// function addNote() {
// let newNote = document.querySelector("#add-input");
// let newList = document.createElement('li');
// newList.innerHTML =
//   '<p>' +
//   newNote.value +
//   "</p> <p> <i class='fa fa-pencil-square-o'></i> <i class='fa fa-times'></i></p> <input type='text' class='edit-note'>";
// // const note = document.createTextNode(
// //   '<p>' +
// //     newNoteForm.value +
// //     "</p> <p> <i class='fa fa-pencil-square-o'></i> <i class='fa fa-times'></i></p> <input type='text' class='edit-note'>"
// // );
// // newList.appendChild(note);
// let lastList = document.querySelector('ul');
// lastList.append(newList);
// console.log(newNote.value);
// }

// const addButton = document.querySelector('#add-btn');
// addButton.addEventListener('submit', addNote());

list.addEventListener('click', function (e) {
  if (e.target.classList[1] == 'fa-pencil-square-o') {
    let parentP = e.target.parentNode;
    parentP.style.display = 'none';

    let noteName = parentP.previousElementSibling;
    let editInput = parentP.nextElementSibling;

    editInput.style.display = 'block';
    editInput.value = noteName.textContent;

    editInput.addEventListener('keypress', function (e) {
      if (e.keyCode == 13) {
        if (editInput.value != '') {
          noteName.textContent = editInput.value;
        }
        editInput.style.display = 'none';
        parentP.style.display = 'block';
      }
    });
  }

  if (e.target.classList[1] == 'fa-times') {
    let listToDelete = e.target.parentNode.parentNode;
    list.removeChild(listToDelete);
  }
});

const hideList = document.querySelector('#hide-list');
hideList.addEventListener('click', function (e) {
  const label = document.querySelector('#hide');

  if (this.checked) {
    label.textContent = 'Unhide notes';
    list.style.display = 'none';
  } else {
    label.textContent = 'Hide notes';
    list.style.display = 'block';
  }
});

const searchInput = document.querySelector('#search-note input');
searchInput.addEventListener('keyup', function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const noteList = list.getElementsByTagName('li');

  Array.from(noteList).forEach(function (note) {
    const noteName = note.firstElementChild.textContent;

    if (noteName.toLowerCase().indexOf(searchTerm) !== -1) {
      note.style.display = 'block';
    } else {
      note.style.display = 'none';
    }
  });
});
