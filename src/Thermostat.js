function Thermostat() {
  this.temp = 20
  this.isPowersaving = "On"
  this.maxTemp = 25
  this.minTemp = 10
}

Thermostat.prototype.increase = function() {
  if (this.temp === this.maxTemp){
    console.log("Maximum Temperature Reached")
  } else {
    this.temp++;
  }
};

Thermostat.prototype.decrease = function() {
  if (this.temp === this.minTemp){
    console.log("Minimum Temperature Reached")
  } else {
    this.temp--
  }
}

Thermostat.prototype.powersavingOff = function() {
  this.isPowersaving = "Off";
  this.maxTemp = 32;
}

Thermostat.prototype.powersavingOn = function() {
  this.isPowersaving = "On";
  this.maxTemp = 25;
}

Thermostat.prototype.reset = function(){
  this.temp = 20
  this.isPowersaving = "On";
  this.maxTemp = 25;
}

Thermostat.prototype.usage = function(){
   if (this.temp < 18){
    return "Low"
  }else if(this.temp > 25){
    return "High"
  } else {
  return "Medium"
  }
}
