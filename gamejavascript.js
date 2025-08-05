let boxes = document.querySelectorAll(".box");
let turnO = true;
let msg_container = document.querySelector(".msg_container ");
let msg = document.querySelector(".winTag");
let new_game_btn = document.querySelector(".newGameBtn");
let reset_btn = document.querySelector(".reset_btn")
let nowin = document.querySelector(".nowin");

let winnigNumbers = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            turnO = false;
            box.innerText = "O";

        }
        else {
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;
        // moveCount++;
        Winner();



    });
}
)
const Winner = () => {
    let moveCount = 0;
    for (num of winnigNumbers) {
        // console.log(winnigNumbers[0],winnigNumbers[1],winnigNumbers[2]);
        let pos1 = boxes[num[0]].innerText;
        let pos2 = boxes[num[1]].innerText;
        let pos3 = boxes[num[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Winner", pos1)
                showWinner(pos1);
                return


            }
        }
    }
    // if (moveCount === 9) {
    //     showDraw();
    // }


}
const showWinner = (Winner) => {
    msg.innerText = `Congratulation,Winner is ${Winner}`;
    msg_container.classList.remove("hide");
    disable_btn();
}
const disable_btn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enable_btn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const resetGame = () => {
    turnO = true;
    moveCount = 0;
    msg_container.classList.add("hide");
    enable_btn();
    // nowin.classList.add("noWinHide");

}
// const showDraw = () => {
//     nowin.innerText = "No one wins!";
//     nowin.classList.remove("noWinHide");
//     disable_btn();
// };
new_game_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);