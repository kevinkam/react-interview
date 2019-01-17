import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    autoFocus={true}
                    className={classnames(
                        'form-control',
                        styles.addPlayerInput,
                    )}
                    placeholder="Type the name of a player"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleSubmit.bind(this)}
                />
                <input
                    type="text"
                    autoFocus={false}
                    // className={classnames(
                    //     'form-control',
                    //     styles.addPlayerInput,
                    // )}
                    placeholder="Type the position of the player"
                    value={this.state.position}
                    onChange={this.changePosition}
                    onKeyDown={this.handleSubmit.bind(this)}
                />
            </div>
        );
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || '',
            position: this.props.position || '',
        };
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    changePosition = e => {
      // console.log('txt  = ', txt);
        this.setState({ position: e.target.value });
    };

    handleSubmit(e) {
        const name = e.target.value.trim();
        if (e.which === 13) {
            this.props.addPlayer(name, this.state.position);
            this.setState({ name: '', position: '' });
        }
    }
}

AddPlayerInput.propTypes = {
    addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
