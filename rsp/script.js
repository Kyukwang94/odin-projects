// Init Data

    // Abbv : Rock Scissor Paper 
    const rsp = ["rock","scissor","paper"];

    let currentRound = 0;
    let userScore = 0;
    let computerScore = 0;
    let randomNumber = 0;
    
    let userChoice = null;
    
    let computerChoice = 0;
    
    let choiceBtnState = false;
    
    let isTie = false;
    let isUserWin = false;
    
    let choiceBtn = document.querySelectorAll(".choice-btn");
    let playBtn = document.querySelector("#playround-btn");
    
    // Event Listeners

    let isUserChoice = false;
    const winnerEl = document.getElementById("winner");
    const computerScoreEl = document.getElementById("computer-score");
    const userScoreEl = document.getElementById("user-score");
    
    choiceBtn.forEach((btn) => {
        btn.disabled = true;
    })
    
    //Play ButtonClicked

    playBtn.addEventListener("click", (event)=>{
        if(event.target.id == "playround-btn"){
            event.target.disabled = true;
            choiceBtn.forEach((btn) => {
                btn.disabled = !btn.disabled;
            })
        }
        
    })


    function ResetData(){
        isUserChoice = false;
        isPlaying = false;
        playBtn.disabled = !playBtn.disabled;

        choiceBtn.forEach((btn) => {
            btn.disabled = !btn.disabled;
        })
    }

    
        choiceBtn.forEach((btn) => {
            btn.addEventListener("click", (event)=>{
                if(event.target.id == "rock"){
                    userChoice = 0;
                }
                else if(event.target.id == "paper"){
                    userChoice = 1;
                }
                else if(event.target.id == "scissor"){
                    userChoice = 2;
                }
                GetComputerChoice();
                CompareChoice();
                if(isTie == true){
                    winnerEl.innerHTML = "Tie";
                }
                else{
                    ScoreBoard(GetWinner());
                }
                ResetData();
            })
        })
    

    function GetComputerChoice(){
        computerChoice = Math.floor(Math.random() * 3);
    }

    function CompareChoice(){
        if(userChoice == computerChoice){
            return isTie = true;
        }
        else{
            isTie = false;
            GetWinner();
        }
    }
    function ScoreBoard(isUserWin){
        if(isUserWin == true){
            userScore++;
            winnerEl.innerHTML = "User Win";
            userScoreEl.innerHTML = userScore;
        }
        else{
            computerScore++;
            winnerEl.innerHTML = "Computer Win";
            computerScoreEl.innerHTML = computerScore;
        }
    }
    function GetWinner(){
        //rock scissor  user win
        //paper rock    user win
        //scissor paper user win
        //else          computer win    

        if(rsp[userChoice] == rsp[0] && rsp[computerChoice] == rsp[1] )
        {
            isUserWin = true;
        }
        else if(rsp[userChoice] == rsp[1] && rsp[computerChoice] == rsp[2] )
        {
            isUserWin = true;
        }
        else if(rsp[userChoice] == rsp[2] && rsp[computerChoice] == rsp[0] )
        {
            isUserWin = true;
        }
        else{
            isUserWin = false;
        }
        return isUserWin;
    }
    
    
    
    
    