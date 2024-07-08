let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgHide = document.querySelector(".msg-container-hide");
let message = document.querySelector("#winner");

let turn0 = true;

// Define winning patterns for Tic-Tac-Toe
let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

// Reset the game
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgHide.classList.add("msg-container-hide");
    message.innerText = "";
};

// Handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was touched");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        // Add a class to disable the box instead of using the disabled property
        box.classList.add("disabled");
        checkWinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach(box => {
        box.classList.add("disabled");
    });
};

// Enable all boxes and reset their content
const enableBoxes = () => {
    boxes.forEach(box => {
        box.classList.remove("disabled");
        box.innerText = "";
    });
};

// Show the winner
const showWinner = (winner) => {
    message.innerText = `Winner Winner Chicken Dinner Congratulations: ${winner}`;
    msgHide.classList.remove("msg-container-hide");
    disableBoxes();
};

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner Winner Chicken Dinner of this Game is:", pos2Val);
                showWinner(pos2Val);
                return;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
