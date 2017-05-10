function Thermostat() {
  this.temp = 20
  this.isPowersaving = true
  this.maxTemp = 25
  this.minTemp = 10
}

Thermostat.prototype.increase = function() {
  if (this.temp === this.maxTemp){
    console.log("Maximum Temperature Reached")
  } else {
    this.temp++
  }
}

Thermostat.prototype.decrease = function() {
  if (this.temp === this.minTemp){
    console.log("Minimum Temperature Reached")
  } else {
    this.temp--
  }
}

Thermostat.prototype.off = function() {
  this.isPowersaving = false;
  this.maxTemp = 32;
}

Thermostat.prototype.reset = function(){
  this.temp = 20
}
