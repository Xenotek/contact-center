import React from 'react'
import Groups from '../containers/Groups';
// import SearchBar from '../containers/SearchBar';
// import AddGroup from '../containers/AddGroup';

export class Glossary extends React.Component {

    render() {
        return (
            <div className="glossary">
                {/*<SearchBar />*/}
                <Groups />
                {/*<AddGroup />*/}
            </div>
        )
    }
}

export default Glossary