describe("Thermostat", function(){
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Exists", function(){
    expect(thermostat).toBeDefined();
  });

  it("Starts at 20 degrees", function(){
    expect(thermostat.temp).toEqual(20);
  });

  it("Can increase in temp", function(){
    thermostat.increase()
    expect(thermostat.temp).toEqual(21);
  });

  it("Can decrease in temp", function(){
    thermostat.decrease()
    expect(thermostat.temp).toEqual(19);
  });

  it("Does not decrease below 10 degrees", function(){
    thermostat.temp = 10
    thermostat.decrease()
    expect(thermostat.temp).toEqual(10);
  });

  it("Is in powersaving mode by default" , function(){
    expect(thermostat.isPowersaving).toEqual(true)
  })

  it("Turns Powersaving mode off", function(){
    thermostat.off()
    expect(thermostat.isPowersaving).toEqual(false)
  });

  it("Has a max temp of 25 if in powersaving mode",function(){
  thermostat.temp = 25
  thermostat.increase()
  expect(thermostat.temp).toEqual(25);
  });

  it("Has a max temp of 32 if powersaving is off", function(){
  thermostat.off()
  expect(thermostat.maxTemp).toEqual(32)
  })

  it("Can be reset", function(){
    thermostat.increase()
    thermostat.increase()
    thermostat.increase()
    thermostat.reset()
    expect(thermostat.temp).toEqual(20)
  })

  it('Returns Low when Temperature is less than 18', function(){
    thermostat.temp = 17
    expect(thermostat.usage()).toEqual("Low")
  })

  it("Returns medium when temperature is between 18 and 25", function(){
    expect(thermostat.usage()).toEqual("Medium")
  })
});
