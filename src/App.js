import React, {Component} from 'react';
import './App.css';
import Groups from './containers/Groups';

class App extends Component {
    state = {
        isShowing: false
    }

    onClick = () => {
        this.setState({
            isShowing: true
        })
    }

    render() {
        const { isShowing } = this.state;
        return (
            <div className="App">
                <button onClick={this.onClick}>Глоссарий</button>
                {
                    isShowing && <Groups />
                }
            </div>
        );
    }
}

export default App;
