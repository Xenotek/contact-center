import React from 'react'
import {connect} from 'react-redux'
import {fetchGroups} from '../actions'
import Groups from '../containers/Groups';
import AddGroup from '../containers/AddGroup';
import ButtonLink from '../components/ButtonLink';

export class Glossary extends React.Component {
    state = {
        isAdding: false
    }

    componentDidMount() {
        this.props.fetchGroups()
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
        const {isAdding} = this.state
        const {loading, groups} = this.props
        return (
            <div className="glossary">
                { loading ? <div>Загрузка...</div> : <Groups groups={groups}/> }
                { !isAdding && <div className="glossary__buttons"><ButtonLink variant="icon-add" onClick={this.openAddPopup}>Добавить
                    термин / группу терминов</ButtonLink></div> }
                { isAdding && <AddGroup closeAddPopup={this.closeAddPopup}/> }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.fetchGroups.groups,
        loading: state.fetchGroups.isFetching
    }
}

export default connect(mapStateToProps, {fetchGroups})(Glossary)
