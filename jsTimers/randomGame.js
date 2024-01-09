function randomGame() {
    let counter = 0;
    const id = setInterval(getRandom, 1000);
    
    function getRandom() {
        let randomNumber =  Math.random();

        if (randomNumber > 0.75) {
            console.log(counter);
            console.log(randomNumber)
            clearInterval(id);
        }
        else {
            counter++
            console.log(randomNumber)  
        } 
    }
}