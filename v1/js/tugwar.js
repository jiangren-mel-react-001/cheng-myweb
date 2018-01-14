
var game = {
    robotIcon: 'R',
    currentCell: null,
    init: function() {
        var cells = document.querySelectorAll('.cell');
        cells.forEach(function(aCell) {
            if (aCell.textContent === this.robotIcon) {
                this.currentCell = aCell;
            }
        });
    },
    move: function(robot, nextCell) {
        if (nextCell.classList.contains('cell')) {
            robot.textContent = '';
            nextCell.textContent = this.robotIcon;
        }
    },
    onClickLeft: function() {
        var nextCell = this.currentCell.previousElementSibling;
        this.move(this.currentCell, nextCell);
        this.currentCell = nextCell;
    },
    onClickRight: function() {
        var nextCell = this.currentCell.nextElementSibling;
        this.move(this.currentCell, nextCell);
        this.currentCell = nextCell;
    }
}

game.init();