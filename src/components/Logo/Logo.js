import React from 'react';
import styled from 'styled-components';
import pic from '../../data/img/logo.png';

export default function Logo() {
  const ResponsiveImage = styled.img`
    display: block;
    max-width: 400px;
    max-hegiht: 100px;
    height: auto;
    width: auto;
  `;

  return <ResponsiveImage src={pic} alt="logo.png" />;
}
