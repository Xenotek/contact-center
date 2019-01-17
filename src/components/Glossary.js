import React from 'react'
import Groups from '../containers/Groups';
// import SearchBar from '../containers/SearchBar';
import CreateGroup from '../containers/CreateGroup';
import ButtonLink from '../components/ButtonLink';

export class Glossary extends React.Component {
    state = {
        isAdding: false
    }

    openAddPopup = (e) => {
        e.preventDefault();
        this.setState({
            isAdding: true
        });
    }
    closeAddPopup = (e) => {
        e.preventDefault();
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
                { !isAdding && <ButtonLink onClick={this.openAddPopup}>Добавить термин / группу терминов</ButtonLink> }
                { isAdding && <CreateGroup closeAddPopup={this.closeAddPopup} /> }
            </div>
        )
    }
}

export default Glossary