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
callimatrix.initNeoMatrix(DigitalPin.P2)
callimatrix.callimatrix_del()
callimatrix.SetMatrixColorbright(0x00ff00, 0, 0, cbrightness.hp25)
callimatrix.SetMatrixColorbright(0xff0000, 3, 3, cbrightness.hp25)
callimatrix.SetMatrixColorbright(0x0000ff, 7, 7, cbrightness.hp6)
callimatrix.callimatrix_show()
basic.forever(function () {
	
})
