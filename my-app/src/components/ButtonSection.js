import React from 'react';
import '../App.css';
import { Button } from './Button';

function ButtonSection() {
    return (
        <div className='btns'>
            <button>
                Get Started
            </button>
        </div>


    // <div>
    //     <Button
    //       className='btns'
    //       buttonStyle='btn--outline'
    //       buttonSize='btn--large'
    //     >
    //       GET STARTED
    //     </Button>
    //     <Button
    //       className='btns'
    //       buttonStyle='btn--primary'
    //       buttonSize='btn--large'
    //       onClick={console.log('hey')}
    //     >
    //       WATCH TRAILER <i className='far fa-play-circle' />
    //     </Button>
    // </div>
  );
}

export default ButtonSection;
