let num1 = 10
let num2 = 20

console.log(`addition is ${num1 + num2}`)

function hi(){
    return 'hello'
}

let gt = function () {
    console.log(this)
}

gt()

let gtN = () => console.log(this)
gtN()

function phone ( cb ) {
    cb()
}

phone(() => {
    console.log(`callback function`)
})

function mobile(){
    function dial(){

    }
    dial()

    return () => {
        console.log(`returning as a function`)

    }
}
console.log(''+mobile())
let fn=mobile()
fn()
mobile()()