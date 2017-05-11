var th1 = new Thermostat


$(document).ready(function(){
  $("#temp").html(th1.temp)
  $("increaseTemperature").click(th1.increase())
  $("#temp").html(th1.temp)
});
