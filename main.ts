KY040.OnPinPressed(DigitalPin.P14, function () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
KY040.onTurned(direction.clockwise, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(25)
    basic.clearScreen()
})
KY040.onTurned(direction.counterclockwise, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(25)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
KY040.setKY040(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
	
})
