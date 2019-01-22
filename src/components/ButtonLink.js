import React from 'react';

class ButtonLink extends React.Component {
    render() {
        const { variant='' } = this.props;
        return (
            <button className={`${variant} button-link`} {...this.props}>
                <span>{this.props.children}</span>
            </button>
        );
    }
}

export default ButtonLink