const logHistory = document.querySelector('.logHistory');
document.querySelectorAll('.completed').forEach(function (item, index) {
  // Define the event handler function
  function handleClick(e) {
    let card_title = e.target
      .closest('.card')
      .querySelector('.card_title').innerText;
    let taskCount = parseInt(document.querySelector('#taskCount').innerText);
    let assignedTasks = parseInt(
      document.querySelector('#assignedTasks').innerText
    );

    document.querySelector('#taskCount').innerText = taskCount + 1;
    document.querySelector('#assignedTasks').innerText = assignedTasks - 1;

    e.target.disabled = true;

    e.target.removeEventListener('click', handleClick);

    let datenow = new Date();
    function generateDatabaseDateTime(date) {
      return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    }

    alert('You have successfully completed the task.');
    console.log(assignedTasks);
    if (assignedTasks == 1) {
      alert('Your all tasks are finished.');
    }

    let logText =
      `<div class="p-4 bg-[#F4F7FF] rounded-2xl mt-2 mb-2">
        <h2 class="font-lg">You have completed the task ` +
      card_title +
      ` at ` +
      generateDatabaseDateTime(datenow) +
      `</h2></div>`;

    document
      .querySelector('.logHistory')
      .insertAdjacentHTML('beforeend', logText);

    e.target
      .closest('.card')
      .querySelector('.completed')
      .classList.add('disabled');
  }

  item.addEventListener('click', handleClick);
});

document.querySelector('#clearHistory').addEventListener('click', function () {
  document.querySelector('.logHistory').innerHTML = '';
});

const btn = document.getElementById('btn');
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};

btn.addEventListener('click', function () {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.body.style.backgroundColor = randomColor;
});

document.addEventListener('DOMContentLoaded', () => {
  let currentDate = document.getElementById('currentDate');
  let currentDay = document.getElementById('currentDay');
  let nowDate = new Date();

  let monthName = nowDate.toLocaleString('en-US', { month: 'short' });
  let day = String(nowDate.getDate()).padStart(2, '0');
  let year = nowDate.getFullYear();

  currentDate.innerText = `${monthName} ${day} ${year}`;

  let dayString = nowDate.toLocaleString('en-US', { weekday: 'short' });
  currentDay.innerText = dayString + ',';
});
