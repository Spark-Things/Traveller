import React from 'react';
import { Button } from './Button';
import '../App.css';
import './Herosection.css';
function Herosection() {
  return (
    <>
      <div className='hero--container'>
        <video src="../videos/video-2.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for ?</p>
        <div className='hero--btns'>
          <Button className='btns' buttonStyle='btn--outline' ButtonSize='btn--large'>
            GET STARTED
          </Button>
          <Button className='btns' buttonStyle='btn--primary' ButtonSize='btn--large'>
            WATCH TRAILER
            <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Herosection;
