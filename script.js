let turn = 'X'
let gameOver = false
//change the turn
const changeTurn = () =>{
    return turn === 'X' ? 'O': 'X'
}
//return the winner
const checkWinner = () =>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let winingChance = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    winingChance.forEach((ele) =>{
        if((boxtexts[ele[0]].innerText === boxtexts[ele[1]].innerText) && (boxtexts[ele[2]].innerText === boxtexts[ele[1]].innerText) && (boxtexts[ele[0]].innerText !== '')){
            document.querySelector('.game-status').innerText = `PLAYER ${boxtexts[ele[0]].innerText} WON!!!!!`
            gameOver = true
        }
    })


}

//adding event to boxes
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((ele) =>{
    let boxText = ele.querySelector('.boxtext')
    ele.addEventListener('click',() =>{
        if(boxText.innerText === ''){
            boxText.innerText = turn
            turn = changeTurn()
            checkWinner()
            if(!gameOver){
                document.getElementsByClassName('game-status')[0].innerText = `Turn for Player ${turn}`
            }
        }
    })
})
// reset the game
reset.addEventListener('click',() =>{
    console.log('reset')
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach((ele) =>{
        ele.innerText = ''
    })
    turn = 'X'
    gameOver = false
    document.getElementsByClassName('game-status')[0].innerText = `Turn for Player ${turn}`
})