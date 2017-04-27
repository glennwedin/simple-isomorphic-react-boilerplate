import React from 'react';
import { Connect } from 'react-redux';
import { fetchPosts } from '../actions/actions';

class FrontComponent extends React.Component {
  componentDidMount() {
    fetchPosts();
  }
  render() {
    return (
        <div>
          This is the FrontComponent
        </div>
      );
  }
}
export default FrontComponent;
