input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
let Potty = 0
let hungry = 0
loops.everyInterval(60000, function () {
    hungry += 1
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() <= 50) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    } else if (hungry == 4) {
        basic.showIcon(IconNames.Silly)
        basic.showString("Press B to Feed me")
        basic.clearScreen()
        basic.pause(500)
        hungry = 0
        Potty += 1
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                # # # # #
                # . . . #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
    } else if (Potty == 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
        Potty = 0
    }
})
