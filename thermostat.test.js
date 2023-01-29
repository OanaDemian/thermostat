const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("returns 20 as an intial temperature", () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("returns 22 as when temperature turned up twice", () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("returns 21 as when temperature turned down once", () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("returns 20 after the temperature is reset", () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    thermostat.reset();
    expect(thermostat.reset()).toEqual(20);
  });

  it("returns alert message when temperature reaches 10 degrees", () => {
    thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
    expect(thermostat.down()).toBe("Temparature cannot go below 10 degrees");
  });

  it("returns alert message when PSM on and temperature reaches 25 degrees", () => {
    thermostat = new Thermostat();
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
    expect(thermostat.up()).toBe(
      "PSM is ON, Temparature cannot go above 25 degrees. Turn OFF PSM."
    );
  });

  it("returns alert message when PSM is OFF and temperature reaches 32 degrees", () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i <= 12; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
    expect(thermostat.up()).toBe("Temparature cannot go above 32 degrees");
  });
  it("returns 20 after the temperature is reset", () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    thermostat.reset();
    expect(thermostat.reset()).toEqual(20);
  });
  it("returns low energy ussage if the temperture is under 18", () => {
    thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
    expect(thermostat.currentEnergyUssage()).toBe("low-usage");
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
    expect(thermostat.currentEnergyUssage()).toBe("medium-usage");
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 7; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
    expect(thermostat.currentEnergyUssage()).toBe("high-usage");
  });
});
