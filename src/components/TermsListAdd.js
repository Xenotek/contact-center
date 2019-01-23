import React from 'react'
import ButtonLink from '../components/ButtonLink';

const Term = (props) => {
    return (
        <div className="terms__item">
            <span onClick={props.remove} data-id={props.id} className="icon-remove"></span>
            <input className="term-input" data-id={props.id} onChange={props.onChangeInput}/>
        </div>
    )
}

const TermsList = (props) => {

    const terms = props.terms.map((item) => {
        return (
            <Term
                key={item.id}
                {...item}
                remove={props.remove}
                onChangeInput={props.onChangeInput}
            />
        )
    })

    return (
        <div className="group__terms">
            {terms}
            <ButtonLink onClick={props.add} variant="icon-add">Добавить термин</ButtonLink>
        </div>
    )

}
export default TermsList