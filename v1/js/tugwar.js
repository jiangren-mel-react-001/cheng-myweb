
class Game {
    constructor() {
        // get data from Ajax
        this.cells = document.getElementsByClassName('cell');
        this.currentPosition = 2;
        this.length = 5
    };
    move(step) {
        var nextPosition = this.currentPosition + step;
        if (this.positionAvailable(nextPosition)) {
            var robot = this.cells[this.currentPosition];
            var nextCell = this.cells[nextPosition];
            robot.classList.remove('current');
            robot.innerHTML = '';
            nextCell.classList.add('current');
            nextCell.innerHTML = 'R';
            this.currentPosition = nextPosition;
        }
    };
    positionAvailable(nextPosition) {
        return nextPosition >= 0 && nextPosition < this.cells.length;
    }
}

let aGame = new Game();
