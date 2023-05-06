import React from 'react';
import { mount } from '@cypress/react18';
import Layout from './Layout';

describe('Copyright', () => {
  it('should display the correct copyright', () => {
    mount(<Layout />);

    cy.contains(/2022-20[0-9]{2}.*All\sRights\sReserved\./).should('be.visible');
  });
});
