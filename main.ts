input.onButtonPressed(Button.A, function () {
    antwoord = antwoord - getal_2
    basic.showNumber(antwoord)
    antwoord = getal_2
    getal_2 = getal_1
})
input.onButtonPressed(Button.B, function () {
    antwoord = getal_1 + getal_2
    basic.showNumber(antwoord)
    getal_1 = getal_2
    getal_2 = antwoord
})
let getal_1 = 0
let antwoord = 0
let getal_2 = 0
getal_2 = 1
