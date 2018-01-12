
function move(robot, nextCell) {
    if (nextCell.classList.contains('cell')) {
        robot.classList.remove('current');
        robot.innerHTML = '';
        nextCell.classList.add('current');
        nextCell.innerHTML = 'R';
    }
}

function onClickLeft() {
    var robot = (document.getElementsByClassName('current'))[0];
    var nextCell = robot.previousElementSibling;
    move(robot, nextCell);
}

function onClickRight() {
    var robot = (document.getElementsByClassName('current'))[0];
    var nextCell = robot.nextElementSibling;
    move(robot, nextCell);
}