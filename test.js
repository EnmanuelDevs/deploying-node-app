console.log("Running test ==")

const result = 2 + 2;

if(result !== 4) {
    console.error("Test Failed")
    process.exit(1)
}

console.log("Test Succesful")