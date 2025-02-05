let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newbtn= document.querySelector("#newgame");
let msgcont = document.querySelector(".msg");
let msg = document.querySelector(".msgp");

let player1turn= true;

let winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (player1turn){
            box.innerText = "X";
            player1turn = false;
        }
        else{
            box.innerText = "O";
            player1turn = true;
        }
        box.disabled = true;

        checkwin();
    });
});

const showwin = (winner) => {
    msg.innerText=`congratulation ${winner} wins`; 
    msgcont.classList.remove('hide');
};

const checkwin = () =>{
    for(let pattern of winpattern){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval1 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                showwin(posval1);
                console.log(posval1);
            }
        }
    }
}

newbtn.addEventListener("click", (box) =>{
    boxes.forEach((box) =>{
        box.innerText= "";
        box.disabled = false;
    });
    player1turn = true;
    msgcont.classList.add('hide');
});