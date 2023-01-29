const Thermostat = require('./thermostat');
const express = require('express');
const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send(`temperature:${thermostat.getTemperature()}`)
});

app.post('/up', (req, res) => {
  res.send(JSON.stringify(thermostat.up()))
});

app.post('/down', (req, res) => {
  res.send( res.send(JSON.stringify(thermostat.down)))
});

app.delete('/temperature', (req, res) => {
  res.send(JSON.stringify(thermostat.reset()))
});

app.post('/psm/enable', (req, res) => {
  res.send(JSON.stringify(thermostat.setPowerSavingMode(true)))
});

app.post('/psm/disable', (req, res) => {
  res.send(JSON.stringify(thermostat.setPowerSavingMode(false)))
});

app.get('/psm', (req, res) => {
  if (thermostat.getPowerSavingMode()){ 
    res.send('Power saving mode is ON.')
  } else {
    res.send('Power saving mode is OFF.')
  }
  });

console.log(`Server listening on localhost:${port}`);
app.listen(port);