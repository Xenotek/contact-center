import React from 'react'
import {connect} from 'react-redux'
import {updateGroup, openModal} from '../actions'
import ButtonLink from '../components/ButtonLink'
import TermsListEdit from '../components/TermsListEdit'
import Description from '../components/Description'
import uuid from 'uuid'


export class EditGroup extends React.Component {

    state = {
        id: this.props.group.id,
        terms: this.props.group.terms,
        description: this.props.group.description
    }
    static id = -1
    static initTerm() {
        return {
            id: EditGroup.id--,
            title: ''
        }
    }

    addTerm = (e) => {
        this.setState({
            terms: [...this.state.terms, EditGroup.initTerm()]
        })
    }

    removeTerm = (e) => {
        let id = e.target.getAttribute('data-id')
        this.props.openModal({
            id: uuid.v4(),
            type: 'confirmation',
            title: 'Подтвердите удаление',
            text: 'Вы действительно хотите удалить термин?',
            onConfirm: () => {
                console.log('id', this.state.terms.filter(term => term.id !== id));
                this.setState({
                    terms: this.state.terms.filter(term => term.id.toString() !== id)
                })
            }
        })

    }

    onChangeDescription = (e) => {
        // console.log(e.target.value);
        this.setState({
            description: e.target.value
        })
    }

    onChangeInput = (e) => {
        // console.log(e.target.value);
        let id = +e.target.getAttribute('data-id')
        // console.log('onChangeInput id', id);
        let newTerms = this.state.terms.map(term => {
            if (term.id === id) {
                return {
                    ...term,
                    title: e.target.value
                }
            }
            return term
        })
        this.setState({
            terms: newTerms
        })
    }

    updateGroupHandle = (e) => {
        this.props.updateGroup({...this.state})
    }

    render() {
        return (
            <div className="group">
                <TermsListEdit onChangeInput={this.onChangeInput} add={this.addTerm} remove={this.removeTerm} terms={this.state.terms}/>
                <Description onChangeDescription={this.onChangeDescription} value={this.state.description} />
                <div className="group__buttons">
                    <ButtonLink variant="icon-ok" onClick={this.updateGroupHandle}>Сохранить</ButtonLink>
                    <ButtonLink variant="icon-cancel button-grey" onClick={this.props.close}>Отменить</ButtonLink>
                </div>
            </div>
        )
    }
}


export default connect(null, {updateGroup, openModal})(EditGroup)