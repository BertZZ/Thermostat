$(document).ready(function() {
  var th1 = new Thermostat
  $('#temp').text(th1.temp);

  $('#increaseTemperature').on('click', function() {
  th1.increase()
  $('#temp').text(th1.temp)
  })

  $('#decreaseTemperature').on('click', function() {
  th1.decrease()
  $('#temp').text(th1.temp)
  })
})
