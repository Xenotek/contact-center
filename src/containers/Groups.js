import React, {Fragment} from 'react'
import TermsList from '../components/TermsList'
import Description from '../components/Description'
import ButtonLink from '../components/ButtonLink'
import SearchBar from '../components/SearchBar'

export class Groups extends React.PureComponent {
    state = {
        groups: this.props.groups
    }

    filterByText = (text) => {
// console.log('this.props.groups', this.props.groups);
        this.setState({
            groups: this.props.groups.filter(function (item) {
                const foundedTerms = item.terms.filter(term => term.title.toLowerCase().includes(text))
                return item.description.toLowerCase().includes(text) || foundedTerms.length
            })
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
                                    <ButtonLink variant="icon-cancel button-red"
                                                onClick={this.removeGroup}>Удалить</ButtonLink>
                                    <ButtonLink variant="icon-edit "
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

export default Groups