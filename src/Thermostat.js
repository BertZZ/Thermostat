function Thermostat() {
  this.temp = 20
  this.isPowersaving = true
  this.maxTemp = 25
  this.minTemp = 10
}

Thermostat.prototype.increase = function() {
  // if (this.temp === this.maxTemp){
  //   return "Maximum Temperature Reached";
  // } else {
    this.temp++;
  // }
  console.log(1)
};

Thermostat.prototype.decrease = function() {
  if (this.temp === this.minTemp){
    console.log("Minimum Temperature Reached")
  } else {
    this.temp--
  }
}

Thermostat.prototype.powersavingOff = function() {
  this.isPowersaving = false;
  this.maxTemp = 32;
}

Thermostat.prototype.powersavingOn = function() {
  this.isPowersaving = true;
  this.maxTemp = 25;
}

Thermostat.prototype.reset = function(){
  this.temp = 20
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
