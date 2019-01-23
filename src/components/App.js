import React, {Component} from 'react'
import '../style.css'
import Glossary from '../containers/Glossary'
import Popup from '../components/Popup'
import Button from '../components/Button'
import ModalContainer from '../containers/Modal'

class App extends Component {
    state = {
        isOpen: true
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
        const { isOpen } = this.state

        return (
            <div className="app">
                <Button onClick={this.openPopup}>Глоссарий</Button>
                <Popup isOpen={isOpen} closePopup={this.closePopup} title="Глоссарий">
                    <Glossary />
                </Popup>


                <ModalContainer />

            </div>
        )
    }
}

export default App
