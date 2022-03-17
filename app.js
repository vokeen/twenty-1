alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. you are going to play against the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press 'y'.");


var userScore = [];
var compScore = [];

do{

    var comp = [];
    var user = [];

    alert("Now... it's the computer's turn.")

    do{
        var ran = Math.floor(Math.random() * 10) + 1

        for(var i = 1; i <= ran; i++){
            comp.push(ran);
        }
        
        var totalComp = comp.length

        alert(`The new number is ${ran}.    The computer total is ${totalComp}.`)

    }while(totalComp < 16);


    alert(`The computer will stop at ${totalComp}.`)


    if(totalComp > 21){

        alert(`The computer got ${totalComp}. Because the computer is over 20, you get the point!`)
        userScore.push("w");
        
    }else if(totalComp < 21){


        alert("Now it's the user's turn.")


        do{
            ran = Math.floor(Math.random() * 10) + 1
        
            for(var i = 1; i <= ran; i++){
                user.push(ran);
            }
        
            var totalUser = user.length
        
            alert(`Your new number is ${ran}.    Your current total is ${totalUser}.`)
        
            if( totalUser > 19 ){
        
                break;
        
            }else{
        
                var x = prompt("Would you like another number? If you would like to stop, press 'n' to stop.")
        
            }
            
        }while(x != "n")
        
        alert(`You stopped at ${totalUser}`);
        
        if (totalUser > 21){
        
            alert(`You got ${totalUser}. Because you went over 20, the computer wins with ${totalComp}`)
            compScore.push("w");
        
        }else if(totalUser > totalComp){
        
            alert(`You win! You got ${totalUser}, and the computer got ${totalComp}.`)
            userScore.push("w")
        
        }else if(totalUser < totalComp){
        
            alert(`You Lost, You got ${totalUser}, and the computer got ${totalComp}.`)
            compScore.push("w");
        
        }else if(totalUser == totalComp){
        
            alert(`It's a tie! You both got ${totalUser}. No one gets a point.`);
        
        }
    }



    alert(`The current score is User: ${userScore.length}, Computer: ${compScore.length}.`)

    var playAgain = prompt("Would you like to play again? Press 'y' to play again. Any other key will exit the program.")

}while(playAgain == "y");

if(userScore.length == compScore.length){

    alert(`Thank you for playing. The final score is User: ${userScore.length}, Computer:${compScore.length}. It's a tie!`)

}else if(userScore.length > compScore.length){

    alert(`Thank you for playing. The final score is User: ${userScore.length}, Computer: ${compScore.length}. You won!`)

}else if(userScore.length < compScore.length){

    alert(`Thank you for playing. The final score is User: ${userScore.length}, Computer: ${compScore.length}. You lost!`)

}