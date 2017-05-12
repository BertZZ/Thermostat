$(document).ready(function() {
  var th1 = new Thermostat

  $('#temp').text(th1.temp);
  $('#maxTemp').text(th1.maxTemp)
  $('#power-saving-status').text(th1.isPowersaving)


  $('#increaseTemperature').on('click', function() {
  th1.increase()
  $('#temp').text(th1.temp)
  })

  $('#decreaseTemperature').on('click', function() {
  th1.decrease()
  $('#temp').text(th1.temp)
  })

  $('#Reset').on('click', function() {
  th1.reset()
  $('#temp').text(th1.temp)
  $('#maxTemp').text(th1.maxTemp)
  $('#power-saving-status').text(th1.isPowersaving)
  })

  $('#PSOn').on('click', function() {
  th1.powersavingOn()
  $('#power-saving-status').text(th1.isPowersaving)
  $('#maxTemp').text(th1.maxTemp)
  })

  $('#PSOff').on('click', function() {
  th1.powersavingOff()
  $('#maxTemp').text(th1.maxTemp)
  $('#power-saving-status').text(th1.isPowersaving)
  })
})
