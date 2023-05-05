import React from 'react';
import { mount } from '@cypress/react18';
import App from './App';

const SEARCH_WORD = 'gotenba';
const ERROR_WORD = 'hogehoge village';

const latlng = {
  lat: 35.2987346,
  lng: 138.9451729,
};

const saunas = [
  {
    sauna_id: 123,
    name: 'hoge sauna',
    address: 'hoge town',
    ikitai: 100,
    ...latlng,
    image_url: 'http://example.com',
    mans_room: { sauna_temperature: 100, mizuburo_temperature: 20 },
    womans_room: { sauna_temperature: 100, mizuburo_temperature: 20 },
    unisex_room: { sauna_temperature: 100, mizuburo_temperature: 20 },
    description: ['hoge', 'fuga'],
  },
];

describe('App', () => {
  beforeEach(() => {
    cy.intercept('POST', '/geocode', {
      statusCode: 200,
      body: latlng,
    });
    cy.intercept('POST', '/search_sauna', {
      statusCode: 200,
      body: saunas,
    });

    mount(<App />);
    cy.get('#search-textfield').type(SEARCH_WORD);
    cy.get('#search-button').click();
  });

  it('renders sauna marker', () => {
    saunas.forEach((sauna) => cy.contains(`${sauna.ikitai}`).should('be.visible'));
  });

  it('renders marker popup', () => {
    saunas.forEach((sauna) => {
      cy.contains(`${sauna.ikitai}`).click();
      cy.contains(`${sauna.name}`).should('be.visible');
    });
  });
});

describe('App render an alert when backend geocoding returns not found', () => {
  beforeEach(() => {
    cy.intercept('POST', '/geocode', {
      statusCode: 404,
      body: latlng,
    });
    cy.intercept('POST', '/search_sauna', {
      statusCode: 200,
      body: saunas,
    });

    mount(<App />);
    cy.get('#search-textfield').type(ERROR_WORD);
    cy.get('#search-button').click();
  });

  it('renders not found popup', () => {
    cy.contains('ERROR').should('be.visible');
  });
});
