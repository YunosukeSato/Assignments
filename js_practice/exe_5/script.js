/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

/* - When the  button is clicked, and the text of the text box is not empty:
- Create a div task element with the class set to task and the text equal to the value of the input box.
- Create a delete button element with the id set to delete and the class set to fas fa-trash-alt. This class corresponds to the trashcan icon in CSS.
- Create a done button element with the id set to done and the class set to fas fa-check. This class corresponds to the check icon in CSS.
- Insert the delete and the done button elements at the  of the newly created task element.
- Insert the div task element at the  of the div element with class notCompleted.
- When the user clicks on one of the  button elements nested within a task,  the corresponding  element from the webpage.
- When the user clicks on one of the  button elements nested within a task,  the corresponding  element from the  list to the end of the  list.
- Additionally, remove the done button element from the corresponding task element.
 */

$(document).ready(function () {
  let taskNum = 0;
  $('.container').click(function (e) {
    // Check what button have been clicked
    const element = e.target.id;
    // Retrieve id of task class of the element user selected
    const grandpaId = e.target.parentElement.parentElement.id;
    if (element === 'addTask') {
      // Retrieve input value
      const input = $('.textBox').val();
      if (input == '') {
        alert('Error: Please enter a task first');
      } else {
        alert(input + ': Complete Assignment');
        // Retrieve html of notCompleted class
        const todoHtml = $('.notCompleted').html();
        // Insert task into todo list
        $('.notCompleted').html(
          todoHtml +
            `<div class='task' id='task${(taskNum += 1)}'><p>${input}<p><button id='done' class='fas fa-check'><button id='delete' class='fas fa-trash-alt'></div>`
        );
      }
      $('.textBox').val('');
    }
    if (element == 'done') {
      // Retrieve task html which user have done with
      const todoHtml = $(`#${grandpaId}`).prop('outerHTML');
      // Retrieve done list html
      const doneHtml = $('.completed').html();
      // Insert task into done list
      $('.completed').html(doneHtml + todoHtml);
      $(`#${grandpaId}`).remove();
    }
    if (element == 'delete') {
      $(`#${grandpaId}`).remove();
    }
  });
});
