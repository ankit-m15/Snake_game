import { onSnake, expandSnake } from './snake.js'

const expansionRate = 1
const gridSize=50
let food = getRandomFoodPosition()

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition=randomGridPosition()
    }
    return newFoodPosition;
}

function randomGridPosition(){
    return {
        x: Math.floor(Math.random()*gridSize+1),
        y: Math.floor(Math.random()*gridSize+1)
    }
}

export function outsideGrid(position) {
    return (
      position.x < 1 || position.x > gridSize ||
      position.y < 1 || position.y > gridSize
    )
  }