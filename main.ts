bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
basic.forever(function () {
    bitbot.move(BBMotor.Right, BBDirection.Forward, bitbot.readLight(BBLightSensor.Left))
    bitbot.move(BBMotor.Left, BBDirection.Forward, bitbot.readLight(BBLightSensor.Right))
    basic.showNumber(bitbot.readLight(BBLightSensor.Left))
})
basic.forever(function () {
    if (bitbot.readLight(BBLightSensor.Right) < 5 && bitbot.readLight(BBLightSensor.Left) < 5) {
        bitbot.stop(BBStopMode.Coast)
    }
})
