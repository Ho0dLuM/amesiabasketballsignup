$(document).ready(function() {
  $('#calendar').fullCalendar({
  });
});

//Add e-mail to cell
  $('#calendar').fullCalendar({
    dayClick: function(date, cell) {
      cellCheck();
      var userEmail = window.prompt('Enter your E-mail address to sign up to play on ' + date.format());
        //validate input from prompt
        var atPos = userEmail.indexOf('@');
        var dotPos = userEmail.lastIndexOf('.');
        if(userEmail === 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= userEmail.length) {
          alert('Not a valid e-mail!');
          return;
        } else {
          //when validation passes
        $(cell.target).append(userEmail + '<br>');
        $(this).css({'background-color':'#CC0000'});
        confirmEight();
      }
    }
  });

//watcher functions start
  function cellCheck() {
    $('td.fc-widget-content').filter(function (index, element) {
    var cellFind = $(element).text() === 'jordon.hoshor@gmail.com';
      if(cellFind === true) {
      $.post('http://textbelt.com/text',
        {
        number: '5152916435',
        message: 'Game is on tomorrow!'
       }).done(function(data) {
         console.log(data);
  			  $(element).append('<p>Text message sent successfully, Game is on!</p>');
          $(element).css({'background-color':'#37CC04'})
        });
      };
    });
  };

  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
  document.addEventListener("contextmenu", function(e) {
    var removeEmail = window.prompt('Enter your Email for removal');
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

    function confirmEight() {
      $('td.fc-day').filter(function(index, element) {
        var eightPeople = $(element).innerHTML === 'Text message sent successfully';
        if(eightPeople === true) {
          $(element).css({'background-color':'#37CC04'});
        }
    });
  };
