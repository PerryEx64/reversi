import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

const Back: React.FC<Props> = ({ size = 24, color = '#ffffff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 7l-5 5l5 5"></path>
    <path d="M17 7l-5 5l5 5"></path>
  </svg>
);

export default Back;
