import React from 'react';

const Description = (props) => {

    if (props.onChangeDescription) {
        return (
            <textarea className="group__description" onChange={props.onChangeDescription} defaultValue={props.value || ''} rows="10" />
        )
    }
    return (
        <div className="group__description">{props.children}</div>
    )
}

export default Description