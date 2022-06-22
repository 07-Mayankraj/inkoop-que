

var p1 = 100; //player health 
var p2 = 100;
let r =0; //rounds 

// scores 
let p1Score = 0; 
let p2Score = 0;


function shootBtn(){
    //random damages for both
    var p1Damage = Math.floor( Math.random()*5); 
    var p2Damage = Math.floor( Math.random()*5);

    //player health after hitting
    p1= p1-p2Damage;
    p2= p2-p1Damage;
    r++;

    //round r will be upadated 
    document.getElementById("Rounds").innerHTML = "Round : " + r;

    //player dies game ends and result will be updated
    if(p1==0){
        document.getElementById("result").innerHTML = "Player 2 - Won:";
    }
    if(p2==0){
        document.getElementById("result").innerHTML = "Player 1 - Won:";
    }

    ///shoot button limiting to 5 Rounds
    if(r == 5){
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").innerHTML = "Finished";
        document.getElementById("btn").style.backgroundColor = "grey";
        document.getElementById("btn").style.color = "white";


    }
    //winner of rounds
    if(p1Damage>p2Damage){
        p1Score++;

    }
    if(p1Damage<p2Damage){
        p2Score++;

    }
    //updating the values
    document.getElementById("player1").innerHTML = "Player 1 - Won: " + p1Score;
    document.getElementById("player2").innerHTML = "Player 2 - Won: " +p2Score;

    //all three Rounds player has won 
    if (p1Score==3){
        finished("Player 1 Won");
    }
    if (p2Score==3){
        finished("Player 2 Won");
    }
   
    //player scored most 
    if(r == 5){
        if(p1Score>p2Score){
            finished("Player 1 Won");
        }
        if(p1Score<p2Score){
            finished("Player 2 Won");
        }
        if(p1Score==p2Score){
            finished("Draw");
        }
    }

    
    
}
function finished(x){
    document.getElementById("result").innerHTML = x;
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "Finished";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("btn").style.color = "white";
    
}

function restartBtn(){
    location.reload();
}