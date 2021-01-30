import React from 'react';

export const TruchetTile = ({ isInverse }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 48 48"
    style={{ border:'0', width: '48px', height: '48px' }}>
    <path
      d={
        isInverse ? "M 24,0 A 24,24 0 0 0 48,24 M 0,24 A 24,24 0 0 1 24,48" :   "M 24,0 A 24,24 0 0 1 0,24 M 48,24 A 24,24 0 0 0 24,48"}
  		style={{fill:'none', stroke: 'black', strokeWidth: '6', strokeLlinecap:'butt'}} />
  </svg>
);
