function countdown(number) {
    const id = setInterval(decrease, 1000);
    let checker = 0
    function decrease() {
        if (checker == number - 1) {
            console.log("DONE!");
            clearInterval(id);
        }
        else {
            checker++
            let newVal = number - checker
            console.log(newVal)  
        } 
    }
}


