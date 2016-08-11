$(document).ready(function() {
  $('#calendar').fullCalendar({
  });
});

//Add e-mail to cell

  $('#calendar').fullCalendar({
    dayClick: function(date, cell) {
      var userEmail = window.prompt('Enter your E-mail adress to sign up to play on ' + date.format());
        //validate input from prompt
        var atPos = userEmail.indexOf('@');
        var dotPos = userEmail.lastIndexOf('.');
        if(userEmail === 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= userEmail.length) {
          alert('Not a valid e-mail!')
          return;
        } else {
          //when validation passes
        $(cell.target).append(userEmail + '<br>');
        $(this).css({'background-color':'#CC0000'})
        cellCheck();
        //confirmEight();
      }
    }
  });

//watcher function start
  function cellCheck() {
    $('td.fc-day').filter(function (index, element) {
    var cellFind = $(element).text() === 'jordon.hoshor@gmail.com';
    //console.log(cellFind);
      if(cellFind === true) {
      $.ajax({
        url: 'http://textbelt.com/text',
        type: 'POST',
        number: '7203339928',
        message: 'Game is on tomorrow!',
  				success: function(data) {
  					console.log('success');
  				},
  				error: function(err) {
  					console.log('fail', err);
  				}
        });
      };
    });
  }

  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
  document.addEventListener("contextmenu", function(e) {
    var removeEmail = window.prompt('Enter your Email for removal');
    //console.log(removeEmail);
    var atPos = removeEmail.indexOf('@');
    var dotPos = removeEmail.lastIndexOf('.');
      if (e.which === 3 && removeEmail === 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= removeEmail.length) {
        alert('Learn to type more better!');
        return;
      } else {
        $('td.fc-day').filter(function (index, element) {
            element.innerHTML = '';
          $(this).css({'background-color':'#FFFFFF'});
        });
      };
    });

  //   function confirmEight() {
  //     $('td.fc-day').filter(function(index, element) {
  //     var eightPeople =
  //   });
  // };
