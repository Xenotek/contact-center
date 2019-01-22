import React from 'react'
import ButtonLink from '../components/ButtonLink';
import TermsList from '../components/TermsList';

export class CreateGroup extends React.Component {
    state = {
        terms: [],
        description: ''
    }

    toggle = () => {
        this.setState({
            isAdding: !this.state.isAdding
        });
    }

    onChangeDescription = (e) => {
        // console.log(e.target.value);
        this.setState({
            description: e.target.value
        });
    }


    componentWillUnmount(){
        // console.log("componentWillUnmount()");
    }

    render() {

        return (
            <div className="popup-add">
                <TermsList terms={this.state.terms}/>
                <Description onChangeDescription={this.onChangeDescription}/>
                <div className="popup-add__buttons">
                    <ButtonLink variant="icon-ok">Сохранить</ButtonLink>
                    <ButtonLink variant="icon-cancel button-grey" onClick={this.props.closeAddPopup}>Отменить</ButtonLink>
                </div>
            </div>
        )
    }
}

const Description = (props) => {
    return (
        <textarea className="popup-add__description" onChange={props.onChangeDescription} rows="10"></textarea>
    )
}



export default CreateGroup

// const mapStateToProps = (state) => {
//     return {
//         groups: state.CreateGroup.groups,
//         loading: state.CreateGroup.isFetching
//     }
// }
//
// export default connect(mapStateToProps, {createGroup})(CreateGroup)