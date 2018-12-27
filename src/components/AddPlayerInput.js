import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./AddPlayerInput.css";

class AddPlayerInput extends Component {
  render() {
    const { name, position } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={styles.wrapper}>
        <input
          type="text"
          autoFocus={true}
          className={classnames("form-control", styles.addPlayerInput)}
          name="name"
          placeholder="Type the name of a player"
          value={name}
          onChange={this.handleChange.bind(this)}
        />
        <select
          value={position}
          className={classnames("form-control", styles.addPlayerSelect)}
          name="position"
          onChange={this.handleChange.bind(this)}
        >
          <option value="" disabled>
            Position of player
          </option>
          <option>SF</option>
          <option>PG</option>
        </select>
        <button type="submit" className={classnames("btn", "btn-default")}>
          ADD
        </button>
      </form>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || "",
      position: this.props.position || ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, position } = this.state;
    this.props.addPlayer(name, position);
    this.setState({ name: "", position: "" });
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerInput;
