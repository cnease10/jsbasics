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