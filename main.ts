input.onButtonPressed(Button.A, function () {
    etat_actuel = 0
    basic.clearScreen()
})
let etat_actuel = 0
etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        if (etat_actuel == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
    }
    etat_passe = etat_actuel
})
