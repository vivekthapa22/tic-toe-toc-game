let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
//yaha html ma winner show garnako lagi class ra id banako thiyau teo yaha import garne
let newBtn = document.querySelector("#new-btn");
let msgHide=document.querySelector(".msg-container-hide");
let message = document.querySelector("#winner");


let turn0= true;
/*let arr = ["apple", "ball", "cat"]
let arr2 = [["apple","ball"],["cat","dog"]] */

//so we are using multi array for tic toe winning logic

let winPatterns =  [[0,1,2],[ 3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];





         //RESET

// yaha every box vitra eventlistener apply garechau ra "0" and "X" /br
//string lai as inner Text send gareko cahu
const resetGame = ()=> {
    turn0= true;
    enableBoxes();
    msgHide.classList.add("msg-container-hide")
    message.innerText="";
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
        console.log("Box was touched");
        if(turn0){
            box.innerText= "O";
            turn0= false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        // yahaa tic toe gamema kunai text "0, X" enter garepachi twice enter garrda /br
        // arko string aucha so stucked change nahos bhanera box lai disable garna parcha
        box.disabled =  true;
        checkWinner();
    });
});

// yaha winner dherai huna sakchan so once winner selected this fucntion helps to block touch hudaina boxes
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   
};
///aba reset buttonko lagi hamle agi disable garem aba enable garne
const enableBoxes = () => {
    for ( let box of boxes){
        box.disabled = false;
        // yaha box reset garna ko lagi text empty gareu
        box.innerText="";
    }
   
};

//yHa hamle winner dekhauna ko lagi function create garnu parcha
const showWinner = (winner)=> {
    // yaha message vitra "Winner Winner Chicken Dinner Congratulations : ${winner}" send garinca
    message.innerText= `Winner Winner Chicken Dinner Congratulations : ${winner}`
    //yaha msgHide variable ma bhako classList bata agi "css" ma display hide gareko text lai remove garne "msg-container-hide"
    msgHide.classList.remove("msg-container-hide");
    //mathi ko disable wala function call huncha yaha ani block huncha boxes once winner selected
    disableBoxes();



};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !=""&& pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                // pos2val or pos3 or pos1 jun rakhdapni winner dekhaucha bcz winner ko value ie o or x string let pos1 pos2 pos3 ma gaayara basako huncha
                console.log("Winner Winner Chicken Dinner of this Game is : position ", pos2Val);
                //showwiner ma pos2val rakheko reason chai winner pos2val ma ayara bascha
                showWinner(pos2Val);
                return;
            }

        }
           
           
    }
};
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click", resetGame);
