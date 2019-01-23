import React from 'react'
import {connect} from 'react-redux'
import {createGroup} from '../actions'
import ButtonLink from '../components/ButtonLink'
import TermsListAdd from '../components/TermsListAdd'
import Description from '../components/Description'
import uuid from 'uuid'

export class AddGroup extends React.Component {

    state = {
        terms: [AddGroup.initTerm()],
        description: ''
    }

    static initTerm() {
        return {
            id: 'random'+uuid.v4(),
            title: ''
        }
    }

    addTerm = (e) => {
        this.setState({
            terms: [...this.state.terms, AddGroup.initTerm()]
        })
    }

    removeTerm = (e) => {
        let id = e.target.getAttribute('data-id')
        this.setState({
            terms: this.state.terms.filter(term => term.id !== id)
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
        let id = e.target.getAttribute('data-id')
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

    submitGroup = (e) => {
        let data = {
            description: this.state.description,
            terms: this.state.terms
        }
        console.log(data);

        this.props.createGroup(data);
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount()");
    }

    render() {

        return (
            <div className="group">
                <TermsListAdd onChangeInput={this.onChangeInput} add={this.addTerm} remove={this.removeTerm} terms={this.state.terms}/>
                <Description onChangeDescription={this.onChangeDescription}/>
                <div className="group__buttons">
                    <ButtonLink variant="icon-ok" onClick={this.submitGroup}>Сохранить</ButtonLink>
                    <ButtonLink variant="icon-cancel button-grey" onClick={this.props.closeAddPopup}>Отменить</ButtonLink>
                </div>
            </div>
        )
    }
}


// export default AddGroup

// const mapStateToProps = (state) => {
//     return {
//         groups: state.CreateGroup.groups,
//         loading: state.CreateGroup.isFetching
//     }
// }
//
export default connect(null, {createGroup})(AddGroup)