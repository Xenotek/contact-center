import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import TermsList from '../components/TermsList'
import Description from '../components/Description'
import ButtonLink from '../components/ButtonLink'
import SearchBar from '../components/SearchBar'
import EditGroup from '../containers/EditGroup'
import { openModal, deleteGroup } from '../actions'
import uuid from 'uuid';

export class Groups extends React.PureComponent {
    state = {
        groups: this.props.groups,
        isEdit: false,
        editGroupId: -1
    }

    filterByText = (text) => {
        this.setState({
            groups: this.props.groups.filter(function (item) {
                const foundedTerms = item.terms.filter(term => term.title.toLowerCase().includes(text))
                return item.description.toLowerCase().includes(text) || foundedTerms.length
            })
        })
    }

    editGroup = (e) => {
        const id = +e.target.closest('.button-action').getAttribute('data-id');
        this.setState({
            isEdit: true,
            editGroupId: id
        })
    }

    cancelEditGroup = () => {
        this.setState({
            isEdit: false,
            editGroupId: -1
        })
    }

    removeGroup = (e) => {
        const id = +e.target.closest('.button-action').getAttribute('data-id');
        this.props.openModal({
            id: uuid.v4(),
            type: 'confirmation',
            title: 'Удаление группы терминов',
            text: 'Вы действительно хотите удалить группу терминов?',
            onConfirm: () => this.props.deleteGroup({id}),
        })
    }

    render() {
        const {groups, isEdit} = this.state;

        return (
            <Fragment>
                <SearchBar filter={this.filterByText}/>
                <div className="groups-list">
                {
                    groups.map((group) => {
                        if (isEdit && group.id === this.state.editGroupId) {
                            return <EditGroup key={group.id} close={this.cancelEditGroup} group={group} />
                        }
                        return (
                            <div className="groups" key={group.id}>
                                <TermsList terms={group.terms}/>
                                <Description>{group.description}</Description>
                                {/*<Description edit={false} onChangeDescription={this.onChangeDescription}/>*/}
                                <div className="group__buttons">
                                    <ButtonLink data-id={group.id} variant="button-action icon-cancel button-red"
                                                onClick={this.removeGroup}>Удалить</ButtonLink>
                                    <ButtonLink data-id={group.id} variant="button-action icon-edit "
                                                onClick={this.editGroup}>Изменить</ButtonLink>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </Fragment>
        )
    }

}

export default connect(null, {openModal, deleteGroup})(Groups)
