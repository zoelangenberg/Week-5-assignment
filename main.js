


$('#submit-btn').click(function(e){
  e.preventDefault()

  var city = $('#city-type').val();

  if (city === "NYC"|| city === "new york"|| city === "new york city")
    {
      $('body').css('background-image', 'url(images/nyc.jpg)');
    }
  else if(city === "San Francisco" || city === "SF" || city === "Bay Area" )
    {
      $('body').css('background-image','url(images/sf.jpg)')
    }
  else if(city === "LA" || city === "Los Angeles" || city === "LAX")
    {
      $('body').css('background-image','url(images/la.jpg)')
    }

  else if(city ==="ATX" || city === "Austin")
    {
      $('body').css('background-image','url(images/austin.jpg)')
    }
  else if( city ==="SYD" || city === "Sydney")
    {
      $('body').css('background-image','url(images/sydney.jpg)')
    }

})
