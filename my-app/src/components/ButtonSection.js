import React from 'react';
import '../App.css';
import '../components/Button'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Button.css';

function ButtonSection(props) {
    return (
        <Link to = {props.link}>
        <div className='btn'>
            <Button >
                {props.name}
            </Button>
        </div>
        </Link>


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
