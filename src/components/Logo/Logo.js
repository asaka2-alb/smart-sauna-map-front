import React from 'react';
import styled from 'styled-components';
import pic from '../../data/img/logo.png';

export default function Logo() {
  const ResponsiveImage = styled.img`
    max-width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  `;

  return <ResponsiveImage src={pic} alt="logo.png" />;
}
