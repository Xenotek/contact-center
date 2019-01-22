import React, {Component} from 'react';
import '../style.css';
import Glossary from '../components/Glossary';
import Popup from '../components/Popup';
import Button from '../components/Button';

class App extends Component {

    state = {
        isOpen: false
    }

    openPopup = () => {
        this.setState({
            isOpen: true
        });
    }

    closePopup = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className="app">
                <Button onClick={this.openPopup}>Глоссарий</Button>
                <Popup isOpen={isOpen} closePopup={this.closePopup} title="Глоссарий">
                    <Glossary />
                </Popup>
            </div>
        );
    }
}

export default App;
