import React, { Component } from 'react';
import { Button } from 'reactstrap';
import m1 from '../images/m1.jpg';
import m2 from '../images/m2.png';
import m3 from '../images/m3.jpg';
import n1 from '../images/n1.jpg';
import n2 from '../images/n2.jpg';
import n3 from '../images/n3.jpg';
import n4 from '../images/n4.jpg';
import n5 from '../images/n5.jpg';
import l1 from '../images/l1.jpg';
import l2 from '../images/l2.jpg';
import l3 from '../images/l3.jpg';
import l4 from '../images/l4.jpg';
import l5 from '../images/l5.jpg';
import l6 from '../images/l6.jpg';
import w1 from '../images/w1.jpg';
import w2 from '../images/w2.jpg';
import w3 from '../images/w3.jpg';
import w4 from '../images/w4.jpg';

class home extends Component {
  state = {
    category: '',
  };

  activeButton = (event) =>
    this.setState({ category: event.currentTarget.dataset.name });

  render() {
    return (
      <div className='text-center' style={{ marginTop: '20px' }}>
        <Button
          onClick={this.activeButton}
          className='theme-color-background'
        >All</Button>{' '}

        <Button
          onClick={this.activeButton}
          data-name='nature'
          className='theme-color-background'
        >
          Nature
        </Button>{' '}
        <Button
          onClick={this.activeButton}
          data-name='lakes'
          className='theme-color-background'
        >
          Lakes
        </Button>{' '}
        <Button
          onClick={this.activeButton}
          data-name='mountains'
          className='theme-color-background'
        >
          Mountains
        </Button>{' '}
        <Button
          onClick={this.activeButton}
          data-name='markhor'
          className='theme-color-background'
        >
          Markhor
        </Button>{' '}
        <Button
          onClick={this.activeButton}
          data-name='waterfall'
          className='theme-color-background'
        >
          Waterfall
        </Button>{' '}
        <div className='row' style={{ marginTop: '20px' }}>
          {(() => {
            switch (this.state.category) {
              case 'markhor':
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={m2} alt='Markhor'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={m1} alt='Markhor'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={m3}
                        alt='Markhor'
                      ></img>
                    </div>
                  </>
                );

              case 'mountains':
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n5} alt='Mountains'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n4} alt='Mountains'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={n3}
                        alt='Mountains'
                      ></img>
                    </div>
                  </>
                );

              case 'lakes':
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l1} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l2} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l4} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l5} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l6} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={l3}
                        alt='Lakes'
                      ></img>
                    </div>
                  </>
                );

              case 'nature':
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n1} alt='Nature'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n2} alt='Nature'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={n3}
                        alt='Nature'
                      ></img>
                    </div>
                  </>
                );

              case 'waterfall':
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={w1} alt='Waterfall'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={w2} alt='Waterfall'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={w3}
                        alt='Waterfall'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={w4}
                        alt='Waterfall'
                      ></img>
                    </div>
                  </>
                );
              default:
                return (
                  <>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={w1} alt='Waterfall'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={w2} alt='Waterfall'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={w3}
                        alt='Waterfall'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={m2} alt='Markhor'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n1} alt='Nature'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l1} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n5} alt='Mountains'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n4} alt='Mountains'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={n3}
                        alt='Mountains'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l2} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l4} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l5} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={l6} alt='Lakes'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={l3}
                        alt='Lakes'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={n2} alt='Nature'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={n3}
                        alt='Nature'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img className="h-252" width='100%' src={m1} alt='Markhor'></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={m3}
                        alt='Markhor'
                      ></img>
                    </div>
                    <div className='mb-20 col-md-4'>
                      <img
                        width='100%'
                        className="h-252"
                        src={w4}
                        alt='Waterfall'
                      ></img>
                    </div>
                  </>
                );
            }
          }).call(this)}
        </div>
      </div>
    );
  }
}
export default home;
