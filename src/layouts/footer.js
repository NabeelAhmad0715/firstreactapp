import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className='row'>
              <div className="col-md-4">Image Filter</div>
              <div className="col-md-4">copyrights='&copy; 2020 Copyright Text'</div>
              <div className="col-md-4">
              <Button
                className='theme-color-background'
              >
                Facebook
              </Button>{' '}
              <Button
                className='theme-color-background'
              >
                Twitter
              </Button>{' '}
              </div>
            </div>
        </footer>
      </>
    );
  }
}
