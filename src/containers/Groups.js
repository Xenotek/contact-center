import React from 'react'
import { connect } from 'react-redux'
import { fetchGroups } from '../actions'

export class Groups extends React.PureComponent {

    componentDidMount() {

        this.props.fetchGroups();
    }

    render() {
        const { groups, loading } = this.props;

        if (loading) {
            return (
                <div>Загрузка...</div>
            )
        }
        return groups.map((item) => {
            return (
                <div
                    key={item.id}
                    {...item}
                >{item.id}</div>
            )
        })
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.fetchGroups.groups,
        loading: state.fetchGroups.isFetching
    }
}
export default connect(mapStateToProps, {fetchGroups})(Groups)