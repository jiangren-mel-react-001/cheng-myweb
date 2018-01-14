

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
        let cells = [];
        for (let i = 0; i < this.length; i++) {
            let aCell = React.createElement('div', {
                className: 'cell border border-secondary w-25'
            }, i === this.currentPosition ? 'R' : '');
            cells.push(aCell);
        }
        let map = React.createElement('div', {
            id: 'game-map',
            className: 'col-sm-8 col-lg-4 d-flex text-center'
        }, cells);
        ReactDOM.render(
            map,
            document.getElementById('game-map')
        );
    }
}

let aGame = new Game();
aGame.render();
