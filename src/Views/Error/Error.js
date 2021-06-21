import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='errorPage'>
      <h2>This page cannot be found. Please check spelling in URL or click below to be directed to home page.</h2>
      <Link to='/home' className='errorHomeLink'>HOME</Link>
    </div>
  )
}

export default Error;