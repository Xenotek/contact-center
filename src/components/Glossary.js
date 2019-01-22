import React from 'react'
import Groups from '../containers/Groups';
// import SearchBar from '../containers/SearchBar';
import AddGroup from '../containers/AddGroup';
import ButtonLink from '../components/ButtonLink';

export class Glossary extends React.Component {
    state = {
        isAdding: false
    }

    openAddPopup = (e) => {
        e.preventDefault()
        this.setState({
            isAdding: true
        });
    }

    closeAddPopup = (e) => {
        e.preventDefault()
        this.setState({
            isAdding: false
        });
    }

    render() {
        const { isAdding } = this.state
        return (
            <div className="glossary">
                {/*<SearchBar />*/}
                <Groups />
                { !isAdding && <div className="glossary__buttons"><ButtonLink variant="icon-add" onClick={this.openAddPopup}>Добавить термин / группу терминов</ButtonLink></div> }
                { isAdding && <AddGroup closeAddPopup={this.closeAddPopup} /> }
            </div>
        )
    }
}

export default Glossary