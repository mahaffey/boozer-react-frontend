import React from 'react'
import { Modal, Button, Icon, Header } from 'semantic-ui-react'
import NewCocktail from './NewCocktail'

export default class NewCocktailModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: this.props.visible
        }
    }

    handleClose = (e) => {
        this.setState({
            modalOpen: false,
        });

        this.props.toggle()

    }

    render() {
        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='browser' content='New Cocktail' />
                <Modal.Content>
                    <NewCocktail toggle={this.handleClose.bind(this)} />
                </Modal.Content>
            </Modal>
        )
    }
}
