import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";
import Pagination from "./Pagination";

class PlayerList extends Component {
  state = {
    currentPage: 0
  };
  onNextPageClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  onPrevPageClick = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.players.length > this.props.players.length) {
      this.setState({ currentPage: 0 });
    }
  }

  render() {
    const { players } = this.props;
    const { currentPage } = this.state;
    const paginatePlayers = players.reduce((r, player, index) => {
      if (index % 5 === 0) {
        return r.concat([[player]]);
      }
      r[r.length - 1] = r[r.length - 1].concat(player);
      return r;
    }, []);
    return (
      <>
        <ul className={styles.playerList}>
          {(paginatePlayers[currentPage] || []).map((player, index) => {
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
        {paginatePlayers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            isLastPage={paginatePlayers.length - 1 === currentPage}
            onNextPageClick={this.onNextPageClick}
            onPrevPageClick={this.onPrevPageClick}
          />
        )}
      </>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PlayerList;
