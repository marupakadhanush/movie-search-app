// src/components/Error.jsx
import React from 'react';
import '../styles/Error.css';

const Error = ({ message }) => {
  return <p className="error">{message}</p>;
};

export default Error;
