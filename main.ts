bluetooth.onBluetoothConnected(function () {
    connected = 1
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    connected = 0
    basic.showIcon(IconNames.No)
})
let connected = 0
connected = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (connected == 1) {
        bluetooth.uartWriteNumber(input.lightLevel())
        basic.pause(100)
    }
})
