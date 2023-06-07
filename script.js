var currentYear;
var currentMonth;

function generateCalendar(year, month) {
  var calendar = document.getElementById("calendar");

  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var calendarHTML = '';

  var date = new Date(year, month);
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  calendarHTML += '<div class="calendar">';
  calendarHTML += '<h2>' + months[date.getMonth()] + ' ' + date.getFullYear()  +'</h2>';
  calendarHTML += '<table>';
  calendarHTML += '<tr>';

  for (var i = 0; i < daysOfWeek.length; i++) {
    calendarHTML += '<th>' + daysOfWeek[i] + '</th>';
  }

  calendarHTML += '</tr>';

  var dayCount = 1;
  var rowCount = 0;

  for (var i = 0; i < 6; i++) {
    calendarHTML += '<tr>';

    for (var j = 0; j < 7; j++) {
      if (rowCount === 0 && j < firstDay.getDay()) {
        calendarHTML += '<td></td>';
      } else if (dayCount > lastDay.getDate()) {
        calendarHTML += '<td></td>';
      } else {
        if (
          dayCount === currentDate.getDate() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getFullYear() === currentDate.getFullYear()
        ) {
          calendarHTML += '<td class="current-day">' + dayCount + '</td>';
        } else {
          calendarHTML += '<td>' + dayCount + '</td>';
        }
        dayCount++;
      }
    }
    calendarHTML += '</tr>';
    rowCount++;

    if (dayCount > lastDay.getDate()) {
      break;
    }
  }

  calendarHTML += '</table>';

  // Add navigation buttons
  calendarHTML += '<div class="navigation">';
  calendarHTML += '<button onclick="previousMonth()">&lt;</button>';
  calendarHTML += '<button onclick="nextMonth()">&gt;</button>';
  calendarHTML += '</div>';

  calendarHTML += '</div>';
  calendar.innerHTML = calendarHTML;
  currentYear = year;
  currentMonth = month;
}

function previousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
}

// Initial generation of calendar for current month
var currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
