const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text =" Ullamco nulla veniam adipisicing adipisicing. Adipisicing laborum irure nostrud nostrud ullamco nostrud eiusmod commodo eiusmod do duis duis minim voluptate. Ipsum cupidatat pariatur in aliqua ut dolor aute laborum veniam magna esse sint aliqua ea. Cupidatat eiusmod velit mollit officia cupidatat consectetur Lorem deserunt ut qui sunt laboris ut. Nulla esse eu eiusmod consequat incididunt excepteur adipisicing sit ut qui"
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)