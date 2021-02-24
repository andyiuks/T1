led.setBrightness(0)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (led.brightness() > 0) {
            led.setBrightness(255)
            basic.pause(1000)
            if (input.lightLevel() < 128) {
                led.setBrightness(148)
            } else if (input.lightLevel() >= 128) {
                led.setBrightness(14)
            }
        } else if (input.buttonIsPressed(Button.A)) {
            if (led.brightness() > 0) {
                led.setBrightness(0)
                basic.pause(1000)
                if (input.lightLevel() < 128) {
                    led.setBrightness(148)
                } else if (input.lightLevel() >= 128) {
                    led.setBrightness(14)
                }
            }
        }
    }
})
