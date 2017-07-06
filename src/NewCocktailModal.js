import React from 'react'
import { Modal, Button, Icon, Header } from 'semantic-ui-react'
import NewCocktail from './NewCocktail'

export default class NewCocktailModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: this.props.toggle,
            modalOpen: this.props.visible
        }
    }

    handleClose = (e) => {
        console.log('closed')
        this.setState({
            modalOpen: false,
        });

        this.state.toggle()

    }

    render() {
        console.log(this.state.modalOpen, 'idk whats happening')
        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='browser' content='New Cocktail' />
                <Modal.Content>
                    <NewCocktail/>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}