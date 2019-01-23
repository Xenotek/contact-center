import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import TermsList from '../components/TermsList'
import Description from '../components/Description'
import ButtonLink from '../components/ButtonLink'
import SearchBar from '../components/SearchBar'
import { openModal } from '../actions'
import uuid from 'uuid';

export class Groups extends React.PureComponent {
    state = {
        groups: this.props.groups
    }

    filterByText = (text) => {
        this.setState({
            groups: this.props.groups.filter(function (item) {
                const foundedTerms = item.terms.filter(term => term.title.toLowerCase().includes(text))
                return item.description.toLowerCase().includes(text) || foundedTerms.length
            })
        })
    }
    removeGroup = (e) => {
        this.props.openModal({
            id: uuid.v4(),
            type: 'confirmation',
            title: 'Удаление группы терминов',
            text: 'Вы действительно хотите удалить группу терминов?',
            onClose: () => console.log("fire at closing event"),
            onConfirm: () => console.log("fire at confirming event"),
        })
    }
    removeTerm = (e) => {
        this.props.openModal({
            id: uuid.v4(),
            type: 'confirmation',
            title: 'Удаление группы терминов',
            text: 'Вы действительно хотите удалить группу терминов?',
            onClose: () => console.log("fire at closing event"),
            onConfirm: () => console.log("fire at confirming event"),
        })
    }

    render() {
        const {groups} = this.state;

        return (
            <Fragment>
                <SearchBar filter={this.filterByText}/>
                {
                    groups.map((group) => {
                        return (

                            <div className="groups" key={group.id}>
                                <TermsList terms={group.terms}/>
                                <Description>{group.description}</Description>
                                {/*<Description edit={false} onChangeDescription={this.onChangeDescription}/>*/}
                                <div className="group__buttons">
                                    <ButtonLink data-id={group.id} variant="icon-cancel button-red"
                                                onClick={this.removeGroup}>Удалить</ButtonLink>
                                    <ButtonLink data-id={group.id} variant="icon-edit "
                                                onClick={this.props.editGroup}>Изменить</ButtonLink>
                                </div>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }

}

export default connect(null, {openModal})(Groups)
