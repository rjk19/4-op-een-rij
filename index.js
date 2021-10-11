const column1 = document.getElementById('column1')
const column2 = document.getElementById('column2')
const column3 = document.getElementById('column3')
const column4 = document.getElementById('column4')
const column5 = document.getElementById('column5')
const column6 = document.getElementById('column6')
const column7 = document.getElementById('column7')

const columns = [column1, column2, column3, column4, column5, column6, column7]

let RedOrYellow = "red"

columns.forEach((column) => {

    column.addEventListener("click", someFunction)
    column.addEventListener("mouseover", hoverFunction)
    column.addEventListener("mouseout", hoverExitFunction)
})

function hoverFunction(event) {
    const children = [].slice.call(event.target.parentElement.children)
    const result = children.filter(child => child.style.backgroundColor !== "red" && child.style.backgroundColor !== "yellow")
    result[result.length - 1].style.backgroundColor = "lightblue"
}

function hoverExitFunction(event){
    const children = [].slice.call(event.target.parentElement.children)
    const result = children.filter(child => child.style.backgroundColor !== "red" && child.style.backgroundColor !== "yellow")
    result[result.length - 1].style.backgroundColor = ""
}

function someFunction(event) {

    const children = [].slice.call(event.target.parentElement.children)

    const white = children.every(i => i.style.backgroundColor !== "red" && i.style.backgroundColor !== "yellow")

    if (white === true) {
        children[children.length - 1].style.backgroundColor = RedOrYellow
        switchPlayer()
        return
    }
    else if (white === false) {
        const result = children.filter(child => child.style.backgroundColor !== "red" && child.style.backgroundColor !== "yellow")

        if (result.length > 0) {
            result[result.length - 1].style.backgroundColor = RedOrYellow
        }
        else {
            alert("Column is full!")
            event.preventDefault()
            switchPlayer()
        }

        switchPlayer()
        return
    
    }
}

function switchPlayer() {
    if (RedOrYellow === "yellow") {
        RedOrYellow = "red"
    } else {
        RedOrYellow = "yellow"
    }

}