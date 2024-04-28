let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw, play again.";

};
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;

       
        msg.innerText = `You Win! your choice ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
       

    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lose. ${compchoice} beats ${userchoice}` ;
        
        msg.style.backgroundColor = "red";
    }

} 


const playGame = (userchoice) => {
    console.log("user choice=",userchoice);
  //generate computer choice
  const compchoice = gencompchoice();
  console.log("comp choice =", compchoice);

  if(userchoice === compchoice){
    //draw game
    drawgame();
  }else{
    let userwin = true;
    if(userchoice === "rock"){
        //scissors,paper
        userwin = compchoice === "paper" ? false : true;

    }
    else if(userchoice === "paper") {
        //rock,scissors
       userwin = compchoice === "scissors" ? false : true;


    }else{
        //rock paper
      userwin = compchoice === "rock" ? false : true;

     }
     showwinner(userwin,userchoice,compchoice);
 }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
