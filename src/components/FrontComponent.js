import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions';

class FrontComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
        <div>
          This is the FrontComponent
        </div>
      );
  }
}
export default connect( state=>state )(FrontComponent);
