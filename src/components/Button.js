import React from 'react';

const Button = (props) => {
    return (
            <button className={props.className} {...props}>
                {props.children}
            </button>
        );
}

export default Button