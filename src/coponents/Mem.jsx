import React from 'react';
import Anoop from './Anoop';
import Animesh from './Animesh';
import Unnati from './Unnati';
import Iffam from './Iffam';
import Dilip from './Dilip';
import Kaushiki from './Kaushiki';
import Shreya from './Shreya';
import Sankalp from './Sankalp';
import Ishita from './Ishita';
import Slider from './Slider';


function Mem() {
  return (
    <div>
      <Slider />
      <div className='first'>
        <h2>Meert </h2>
        <div className='second' >
          <h2 className='head1'>Meet Final Year Team</h2>
          <div className='final'>
            <div className='wrapper'>
              {/* Add your CSS classes for styling */}
              <div className='item'><Anoop /></div>
              <div className='item'><Animesh /></div>
              <div className='item'><Dilip /></div>
              <div className='item'><Ishita /></div>
              <div className='item'><Sankalp /></div>
              <div className='item'><Shreya /></div>
              <div className='item'><Unnati /></div>
              <div className='item'><Iffam /></div>
            </div>
          </div>
          <div className='third'>
            <h2 className='head1'>Meet Third Year Team</h2>
            <div className='final'>
              <div className='wrapper'>
                {/* Add your CSS classes for styling */}
                <div className='item'><Anoop /></div>
                <div className='item'><Animesh /></div>
                <div className='item'><Dilip /></div>
                <div className='item'><Ishita /></div>
                <div className='item'><Sankalp /></div>
                <div className='item'><Shreya /></div>
                <div className='item'><Unnati /></div>
                <div className='item'><Iffam /></div>
              </div>
            </div>
          </div>
          <div className='second'></div>
        </div>
      </div>
    </div>
  );
}

export default Mem;
