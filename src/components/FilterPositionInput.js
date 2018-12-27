import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from "./AddPlayerInput.css";

class FilterPositionInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: this.props.position || '',
    };
  }

  render() {
    const position = this.state;
    return (
      <select
        value={this.state.position}
        name="position"
        className={classnames("form-control", styles.addPlayerInput)}
        onChange={this.handleChange.bind(this)}
      >
        <option></option>
        <option>SF</option>
        <option>PG</option>
        <option>SG</option>
        <option>PF</option>
      </select>
    );
  }


  handleChange(e) {
    const position = e.target.value;
    this.setState({ position });
    this.props.filterPlayer( position );
  }
}

FilterPositionInput.propTypes = {
  filterPlayer: PropTypes.func.isRequired,
};

export default FilterPositionInput;
