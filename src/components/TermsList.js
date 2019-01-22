import React from 'react'
import ButtonLink from '../components/ButtonLink';

const Term = (props) => {
    return (
        <div className="terms__item">
            <input onChange={props.onChangeDescription}/>
        </div>
    )
}

const TermsList = (props) => {

    const terms = props.terms.map((item) => {
        return (
            <Term
                key={item.id}
                {...item}
            >{item.id}</Term>
        )
    })

    return (
        <div className="terms">
            {terms}
            <ButtonLink variant="icon-add">Добавить термин</ButtonLink>
        </div>
    )

}
export default TermsList