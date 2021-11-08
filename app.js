const Gpio = require('onoff').Gpio
const led = new Gpio(21, 'out')

const piscaLed = setInterval(() => {
  
    if(led.readSync() === 0){

        led.writeSync(1)

    }

    else{

        led.writeSync(0)

    }

}, 1000)