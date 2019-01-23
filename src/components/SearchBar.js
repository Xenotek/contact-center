import React, { Component } from 'react'
import search from '../img/search.svg'

class SearchBar extends Component{

    onTextChanged = (e) => {
        let text = e.target.value.trim().toLowerCase();
        this.props.filter(text);
    }

    render() {
        return (
            <div className="glossary-search">
                <div className="glossary-search__image"><img src={search} alt="search"/></div>
                <input className="glossary-search__input" placeholder="Поиск по глоссарию" onChange={this.onTextChanged} />
            </div>
        )
    }
}

export default SearchBar