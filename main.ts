KY040.OnPinPressed(DigitalPin.P14, function () {
    basic.showIcon(IconNames.No)
    for (let index = 0; index <= 7; index++) {
        callimatrix.SetMatrixColorbright(0xffff00, index, Pos, cbrightness.hp2)
    }
    basic.pause(200)
    callimatrix.callimatrix_show()
    basic.clearScreen()
})
KY040.onTurned(direction.clockwise, function () {
    basic.showArrow(ArrowNames.East)
    Pos += 1
    if (Pos >= 7) {
        Pos = 7
    }
    basic.pause(25)
    basic.clearScreen()
})
KY040.onTurned(direction.counterclockwise, function () {
    basic.showArrow(ArrowNames.West)
    Pos += -1
    if (Pos <= 0) {
        Pos = 0
    }
    basic.pause(25)
    basic.clearScreen()
})
let Pos = 0
basic.showIcon(IconNames.Heart)
KY040.setKY040(DigitalPin.P1, DigitalPin.P15)
callimatrix.initNeoMatrix(DigitalPin.P2)
callimatrix.callimatrix_del()
Pos = 0
callimatrix.SetMatrixColorbright(0x00ff00, 0, 0, cbrightness.hp25)
callimatrix.callimatrix_show()
basic.pause(1000)
basic.forever(function () {
    callimatrix.SetMatrixColorbright(0xff0000, 0, Pos, cbrightness.hp6)
    callimatrix.callimatrix_show()
    callimatrix.callimatrix_del()
    callimatrix.callimatrix_show()
})
