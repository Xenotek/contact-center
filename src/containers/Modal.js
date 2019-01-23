import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {closeModal} from '../actions/index'
import Button from '../components/Button'

class MyPortal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

class Modal extends Component {
    onClose(){
        if(this.props.item.onClose){
            this.props.item.onClose();
            this.props.onClose(this.props.item);
        } else {
            this.props.onClose(this.props.item);
        }
    }
    onConfirm(){
        if(this.props.item.onConfirm){
            this.props.item.onConfirm();
            this.props.onClose(this.props.item);
        }
    }
    render() {
        const { type } = this.props.item;
        if (type === 'confirmation') {
            const { text, title } = this.props.item;
            return (
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal__title">{title}</div>
                        <div className="modal__text">{text}</div>
                        <div className="modal__buttons">
                            <Button className="button-remove" onClick={() => this.onConfirm()}>Удалить</Button>
                        </div>

                        <div className="modal__close">
                            <Button className="button-close" onClick={() => this.onClose()} >×</Button>
                        </div>
                    </div>
                </div>
            )
        } else if (type === 'custom') {
            const { content } = this.props.item;
            return (
                <div className="modal-wrapper">
                    <div className="modal">
                        <button className="close" onClick={() => this.onClose()}>&times;</button>
                        {content}
                    </div>
                </div>
            )
        }
        return (
            <div></div>
        );
    }
}

class Modals extends Component {
    render() {
        if (!this.props.modals.length) {
           return null
        }
        const modals = this.props.modals.map((item,i) => <MyPortal key={i} ><Modal item={item} onClose={(item) => this.props.closeModal(item)}/></MyPortal>)

        return (
            <div className={modals.length>0 ? "modals" : ""}>
                {modals}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modals: state.modals.modals
    };
}

const ModalContainer = connect(mapStateToProps, {closeModal})(Modals)

export default ModalContainer
