// Created By: Alex.c
// Created On: 2022/09/29
// These blocks of code tell the computer to ask the user for a unit for a,b,h and uses these units to calculate the area of a trapezoid.
game.splash("\"Let's calculate the area of a trapezoid.\"")
let h = game.askForNumber("\"Enter the length of the height (cm)")
let Base_A = game.askForNumber("\"Enter length of side a (cm)\"")
let Base_B = game.askForNumber("\"Enter length of side b (cm)\"")
let ab = Base_A + Base_B
let ab2 = ab / 2
let area = ab2 * h
game.splash("The area of a trapezoid dimensions: " + Base_A + "cm by" + Base_B + "cm by" + h + "cm is" + convertToText(area) + "cm2")
game.splash("Done")
