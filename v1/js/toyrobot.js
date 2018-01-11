

function findRobotPosition(cells, rows, columns) {
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < columns; x++) {
            var index = y * rows + x;
            if (cells[index].textContent) {
                return { x: x, y: y};
            }
        }
    }
    return null;
}

function onClickEast() {
    var cells = document.querySelectorAll('.map-cell');
    var robotPosition = findRobotPosition(cells, 5, 5);
    if (robotPosition && robotPosition.x < 4) {
        var currentIndex = robotPosition.y * 5 + robotPosition.x;
        cells[currentIndex].textContent = '';
        cells[currentIndex + 1].textContent = 'R';
    }
}