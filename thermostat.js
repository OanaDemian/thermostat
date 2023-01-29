class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  getTemperature() {
    return this.temperature;
  }
  getPowerSavingMode(){
    return this.powerSavingMode;
  }

  down() {
    if (this.temperature <= 10) {
      return "Temparature cannot go below 10 degrees";
    } else {
      return (this.temperature -= 1);
    }
  }

  setPowerSavingMode(powerSavingMode) {
    this.powerSavingMode = powerSavingMode;
  }

  up() {
    if (this.powerSavingMode) {
      if (this.temperature < 25) {
        return (this.temperature += 1);
      } else {
        return "PSM is ON, Temparature cannot go above 25 degrees. Turn OFF PSM.";
      }
    } else {
      if (this.temperature < 32) {
        return (this.temperature += 1);
      } else {
        return "Temparature cannot go above 32 degrees";
      }
    }
  }
  currentEnergyUssage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
  reset() {
    this.temperature = 20;
    return this.temperature;
  }
}

module.exports = Thermostat;
