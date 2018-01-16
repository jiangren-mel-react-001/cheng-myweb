

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPosition: 5,
            length: 10
        };
    };
    move(step) {
        var nextPosition = this.state.currentPosition + step;
        if (this.positionAvailable(nextPosition)) {
            this.setState({...this.state, currentPosition: nextPosition});
        }
    };
    positionAvailable(nextPosition) {
        return nextPosition >= 0 && nextPosition < this.state.length;
    };
    render() {
        let goLeftButton = React.createElement('button', {
            onClick: () => this.move(-1)
        }, '<')
        let cells = [goLeftButton];
        for (let i = 0; i < this.state.length; i++) {
            let aCell = React.createElement('div', {
                className: 'cell border border-secondary w-25',
                key: i
            }, i === this.state.currentPosition ? 'R' : '');
            cells.push(aCell);
        }
        let goRightButton = React.createElement('button', {
            onClick: () => this.move(1)
        }, '>')
        cells.push(goRightButton);
        return cells;
    }
}

ReactDOM.render(
    React.createElement(Game),
    document.getElementById('game-map')
);