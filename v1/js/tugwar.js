
class Game {
    constructor() {
        // get data from Ajax
        this.currentPosition = 5;
        this.length = 10;
    };
    move(step) {
        var nextPosition = this.currentPosition + step;
        if (this.positionAvailable(nextPosition)) {
            this.currentPosition = nextPosition;
            this.render();
        }
    };
    positionAvailable(nextPosition) {
        return nextPosition >= 0 && nextPosition < this.length;
    };
    render() {
        let map = document.createElement('div');
        map.setAttribute('id', 'game-map');
        map.classList.add('col-sm-8', 'col-lg-4', 'd-flex', 'text-center')
        for (let i = 0; i < this.length; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell', 'border', 'border-secondary', 'w-25');
            if (i === this.currentPosition) {
                cell.textContent = 'R';
            }
            map.appendChild(cell);
        }
        let app = document.getElementById('game');
        let gameMap = document.getElementById('game-map');
        app.replaceChild(map, gameMap);
    }
}

let aGame = new Game();
aGame.render();
