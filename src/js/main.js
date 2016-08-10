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
          return;
        } else {
          //when validation passes
        $(cell.target).append(userEmail + '<br>');
        $(this).css({'background-color':'#CC0000'})
        cellCheck();
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
        number: '5152916435',
        message: 'Will this work? Probably not because I wrote it.',

  				success: function(data){
  					alert('success')
  				},
  				error: function(err) {
  					console.log('fail', err);
  				}
        });
      };
    });
  }


  // document.addEventListener("contextmenu", function(e) {
  //   e.preventDefault();
  // }, false);
  // document.addEventListener("contextmenu", function(e) {
  //   var removeEmail = window.prompt('Enter your Email for removal');
  //   var atPos = removeEmail.indexOf('@');
  //   var dotPos = removeEmail.lastIndexOf('.');
  //     if (e.which === 3) {
  //   } else if(removeEmail === 0 || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= removeEmail.length) {
  //     return;
  //   } else {
  //     removeEmail.replace(0, '');
  //   }
  // });


  // //Remove email from cell listener
  //   $('form').on('submit', function(event) {
  //     event.preventDefault();
  //     var emailToRemove = $('#removeEmail').val();
  //     //console.log(emailToRemove);
  //     $('td.fc-day').filter(function (index, element) {
  //       $(element).text() === emailToRemove;
  //         $('emailToRemove').remove();
  //     });
  //   });


  // $('td.fc-day').filter(function (index, element) {
  //   return $(element).text() === 'email@email.com'
  // })
  // $('td.fc-day').filter(function (index, element) {
  //   console.log(element.innerHTML);
  // });
