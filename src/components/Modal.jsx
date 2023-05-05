import React from 'react';

const Modal = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor='my-modal-6' className='btn'>
        Login
      </label>

      {/* Put this part before </body> tag */}
      <input type='checkbox' id='my-modal-6' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Here Goes The Login Form</h3>
          <p className='py-4'>Your name and password will soon be here!</p>
          <div className='modal-action'>
            <label htmlFor='my-modal-6' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
