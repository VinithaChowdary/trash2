let userScore=0;
let compScore=0;
let btn1= document.querySelector(".btn1")
let users=document.querySelector("#users")
let comps=document.querySelector("#comps")

const choices=document.querySelectorAll(".box");


genCompChoice = () =>{
    const options=["rock", "paper", "sci"];
    ch=Math.floor(Math.random()*3);
    return options[ch];
}

const playGame = (userChoice) =>{
   const compChoice= genCompChoice();
   console.log(`User has clicked ${userChoice}`);
   console.log(`Comp has clicked ${compChoice}`);
   if(userChoice==compChoice){
    btn1.innerText="Draw";
    btn1.style.backgroundColor="Indigo";
}

   else if (userChoice=='sci' && compChoice=='paper'){
    btn1.innerText="You Win!!";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='sci' && compChoice=='rock'){
    btn1.innerText="You Lose!!";
    btn1.style.backgroundColor="Red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='rock' && compChoice=='sci'){
    btn1.innerText="You Win!!";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='rock' && compChoice=='paper'){
    btn1.innerText="You Lose!!";
    btn1.style.backgroundColor="red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='paper' && compChoice=='rock'){
    btn1.innerText="You Win!!";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='paper' && compChoice=='sci'){
    btn1.innerText="You Lose!!";
    btn1.style.backgroundColor="Red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   


};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

        
    });
});