import React from 'react';

export function GetStation({ station }) {
  const { bensin95, company, diesel, name } = station;

  return (
    <div className='station'>
      <h2 className='title'>{name}</h2>
      <p className='company'>Fyrirtæki: {company}</p>
      <p className='price'>Dísilolía: {diesel}kr.</p>
      <p className='price'>Bensín 95 Oktan: {bensin95}kr.</p>
    </div>
  );
}
