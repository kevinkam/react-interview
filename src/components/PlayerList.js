import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import ReactPaginate from 'react-paginate';

class PlayerList extends Component {
    constructor(props) {
        super(props);

        console.log('this.props = ', this.props);
        this.state = {
            currentPage: 1,
        };
    }

    renderList = () => {
        return this.props.players.map((player, index) => {
            if (
                index < this.state.currentPage * 5 &&
                index >= (this.state.currentPage - 1) * 5
            ) {
                return (
                    <PlayerListItem
                        key={index}
                        id={index}
                        name={player.name}
                        team={player.team}
                        position={player.position}
                        starred={player.starred}
                        {...this.props.actions}
                    />
                );
            }
        });
    };

    goPrev = () => {
        if (
            (this.state.currentPage - 1) * 5 < this.props.players.length &&
            this.state.currentPage * 5 > this.props.players.length &&
            this.state.currentPage - 1 >= 1
        ) {
            this.setState({
                currentPage: this.state.currentPage - 1,
            });
        }
    };

    goNext = () => {
        if (
            (this.state.currentPage + 1) * 5 > this.props.players.length &&
            this.state.currentPage * 5 < this.props.players.length
        ) {
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
        }
    };

    render() {
        return (
            <ul className={styles.playerList}>
                <div onClick={this.goPrev}>Prev</div>
                <div onClick={this.goNext}>Next</div>
                {this.renderList()}
            </ul>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

export default PlayerList;
