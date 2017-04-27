import React from 'react';
import { Connect } from 'react-redux';

class FrontComponent extends React.Component {
  render() {
    return (
        <div>
          This is the FrontComponent
        </div>
      );
  }
}
export default Connect(state => state)(FrontComponent);
