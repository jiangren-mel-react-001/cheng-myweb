
var state = {
    cells: [],
    currentPosition: 0,
    init: function() {
        this.cells = document.getElementsByClassName('cell');
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].classList.contains('current')) {
                this.currentPosition = i;
                break;
            }
        }
    },
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
    },
    positionAvailable(nextPosition) {
        return nextPosition >= 0 && nextPosition < this.cells.length;
    }
}

state.init();

function onClickLeft() {
    state.move(-1);
}

function onClickRight() {
    state.move(1);
}