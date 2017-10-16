import { h, Component } from 'preact';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            diceCount: 1,
            faceCount: 6,
            modifier: 0,
            values: '',
            sum: null
        };
    }

    handleClick = () => {
        const values = '';
        const sum = 10;

        this.setState({
            values,
            sum: sum + Number(this.state.modifier)
        });
    };

    handleDiceChange = (e) => {
        this.setState({ diceCount: e.target.value });
    };

    handleFaceChange = (e) => {
        this.setState({ faceCount: e.target.value });
    };

    handleModifierChange = (e) => {
        this.setState({ modifier: e.target.value });
    };

    render() {
        return (
            <div id="app">
                <div class="home">
                    <label>
                        Dice Count
                        <input
                            type="number"
                            value={this.state.diceCount}
                            onChange={this.handleDiceChange}
                        />
                    </label>
                    <label>
                        Face Count
                        <input
                            title="Over 6 faces there is no more UNICODE CHARS so you get random stuff :) "
                            type="number"
                            max="6"
                            value={this.state.faceCount}
                            onChange={this.handleFaceChange}
                        />
                    </label>
                    <label>
                        Modifier
                        <input
                            type="number"
                            value={this.state.modifier}
                            onChange={this.handleModifierChange}
                        />
                    </label>
                    <button onClick={this.handleClick}> Roll </button>
                    <div
                        id="dice"
                        dangerouslySetInnerHTML={{ __html: this.state.values }}
                    />
                    {this.state.values && <h4>sum: {this.state.sum}</h4>}
                </div>
            </div>
        );
    }
}
