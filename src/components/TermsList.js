import React from 'react'
// import ButtonLink from '../components/ButtonLink';

const Term = (props) => {
    return (
        <div className="terms__item">
            {props.title}
        </div>
    )
}

const TermsList = (props) => {

    const terms = props.terms.map((item) => {
        return item.title
    })

    return (
        <div className="group__terms">
            {terms.join(', ')}
        </div>
    )

}
export default TermsList