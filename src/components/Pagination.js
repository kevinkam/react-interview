import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Pagination.css";

class Pagination extends Component {
  render() {
    const { currentPage, isLastPage, onNextPageClick, onPrevPageClick } = this.props;
    return (
      <div>
        <a
          className={classnames(
            styles.paginateLink,
            currentPage === 0 ? styles.disabled : undefined
          )}
          onClick={onPrevPageClick}
        >
          Prev
        </a>
        <span className={styles.paginatePage}>{currentPage + 1}</span>
        <a
          className={classnames(styles.paginateLink, isLastPage ? styles.disabled : undefined)}
          onClick={onNextPageClick}
        >
          Next
        </a>
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  onNextPageClick: PropTypes.func.isRequired,
  onPrevPageClick: PropTypes.func.isRequired
};
export default Pagination;
