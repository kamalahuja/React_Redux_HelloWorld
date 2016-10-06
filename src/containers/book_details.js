import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {
    render() {
      return  (
        <div>
            <h3>{this.props.book.title}</h3>
            {this.props.book.description}
        </div>);
    }
}

function mapStateToProps(state) {
  return {
    book : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetails);
