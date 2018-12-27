import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import Pagination from './Pagination';

class PlayerList extends Component {
  constructor() {
    super();

    this.state = {
        pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }
  
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
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
        <Pagination items={this.props.players} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
