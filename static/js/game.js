let tbody = d3.select('tbody')
let t = 0

while (t < 3) {
    tbody.append('tr').html('<td></td><td></td><td></td>')
    t++
}

var restart = document.querySelector("#b");

var squares = document.querySelectorAll("td");

function clearBoard() {
    squares.forEach(s => s.textContent = '')
}

restart.addEventListener('click', clearBoard)

// if statement using this
function changeMarker() {
    if (this.textContent === ''){
        this.textContent = 'X'
    } else if (this.textContent === 'X') {
        this.textContent = 'O'
    } else this.textContent = ''
}

squares.forEach(s => s.addEventListener('click', changeMarker))