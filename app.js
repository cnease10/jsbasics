for (let i = 1; i<21; i++){
    console.log(i)
}

for (let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 0; i <20; i++) {
    console.log('repeater')
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 ==0 && i % 5 == 0) {
        console.log("fizzbuzz")
    }
    else if (i % 3 == 0) {
        console.log("fizz")
    }
    else if (i % 5 == 0) {
        console.log("buzz")
    }
    else {
        console.log(i)
    }
}

const ninjaturtles = ["don", "mikey", "raph", "leo"]
for (let i = 0; i < ninjaturtles.length; i++) {
    const upper = ninjaturtles[i].toUpperCase();
    console.log(upper)
}

//array play

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];


const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

let newShoe = kristynsCloset.shift();
//console.log(newShoe)
thomsCloset[2].push(newShoe)
//console.log(thomsCloset)
let outfit = [kristynsCloset[0], kristynsCloset[2], kristynsCloset[3]]
console.log("kristyn is wearing " + outfit)
console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])


