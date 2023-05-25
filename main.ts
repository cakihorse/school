let rang = 0
rang = 0

input.onButtonPressed(Button.A, function () {
    rang += 1
    if (rang > 6){
        rang += 1
    }
    
})


basic.forever(function () {
    if (rang == 1) {
        basic.showString("t")
    }
    if (rang== 2) {
        basic.showString("e")
    }
    if (rang == 3) {
        basic.showString("c")
    }
    if (rang == 4) {
        basic.showString("h")
    }
    if (rang == 5) {
        basic.showString("n")
    }
    if (rang == 6) {
        basic.showString("o")
    }
    
})
