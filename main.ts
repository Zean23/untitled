function green () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
	
})
function yellow () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(20)
basic.forever(function () {
    green()
    basic.pause(100)
    red()
    basic.pause(100)
    yellow()
    basic.pause(100)
})
