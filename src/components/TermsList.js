import React from 'react'

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