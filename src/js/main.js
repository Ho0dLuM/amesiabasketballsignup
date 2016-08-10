$(document).ready(function() {
  $('#calendar').fullCalendar({
  });
});
/*
neat comments!
there may be some places where another function could be created for the conditionals, but I'm not sure if that would break your code or not.
good stuff!
*/
//Add e-mail to cell

// var emailObj = ajaxCall(apiUrl);
// var apiUrl = 'https://us1.api.mailchimp.com/3.0/automations/1cd819280d/emails/2117f379e7/queue'


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
        url: 'https://us1.api.mailchimp.com/3.0/automations/1cd819280d/emails/2117f379e7/queue',
  				type: 'POST',
          dataType: 'JSON',
  				data: {
                apikey: '9e6c86ce5121df997998a5feb8d25ee9-us1',
  				      email: 'jordon.hoshor@gmail.com',
                status: 'subscribed'
  				      },
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
//mailchimp APi key = 9e6c86ce5121df997998a5feb8d25ee9-us1



//$.post('https://us1.api.mailchimp.com/3.0/automations/1cd819280d/emails/2117f379e7/queue', function() {

//   $.post( "example.php", function() {
//     alert( "success" );
//   })
//
//
// function ajaxCall(url) {
//   return Promise.resolve($.ajax(apiUrl));
// }
//

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



 //you can inspect the click event
//
//     $this = $('.cmenu');
//
//     if (e.which === 3){ // right click = 3, left click = 1
//         $this.addClass('open');
//         $this.css({
//             'left': e.pageX - $this.width() / 2,
//             'top': e.pageY - $this.height()
//         });
//     }else{
//         $this.removeClass('open');
//     }
// });




  // $('td.fc-day').filter(function (index, element) {
  //   return $(element).text() === 'email@email.com'
  // })
  // $('td.fc-day').filter(function (index, element) {
  //   console.log(element.innerHTML);
  // });
