import { getSnakeHead,snakeBody,snakeIntersect, update as updateSnake, draw as drawSnake} from './snake.js'
import { outsideGrid,update as updateFood, draw as drawFood} from './food.js'

export const snakeSpeed=6

let lastRenderTime=0
let gameOver = false
const gameBoard=document.getElementById('game_board')

function main(currentTime)
{
    if(gameOver){
        return alert('Your Score is ' +(snakeBody.length-1))
    }
    window.requestAnimationFrame(main)
    const SecondsSinceRenderTime=(currentTime-lastRenderTime)/1000
    if(SecondsSinceRenderTime<1 / snakeSpeed) return
    
    lastRenderTime=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update()
{
    updateSnake()
    updateFood()
    checkSnakeDeath();
}
function draw()
{
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}
function checkSnakeDeath(){
    gameOver=outsideGrid(getSnakeHead()) || snakeIntersect()
}