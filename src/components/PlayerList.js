import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Pagination from './Pagination';
import FilterPositionInput from './FilterPositionInput';

class PlayerList extends Component {
  constructor() {
    super();

    this.state = {
        position: '',
        pageOfItems: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.filterPlayer = this.filterPlayer.bind(this);
  }
  
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  filterPlayer(position) {
    this.setState({position: position});
  }

  render() {
    return (
      <div>
        <FilterPositionInput filterPlayer={this.filterPlayer} />
        <ul className={styles.playerList}>
          {this.state.pageOfItems.map((player, index) => {
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
          })}
        </ul>
        <Pagination items={this.props.players} onChangePage={this.onChangePage} position={this.state.position} />
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
