import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe(LandingPage.name, () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      getAllSongs: jest.fn(),
    };
  });
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <LandingPage {...mockProps} />
      </BrowserRouter>
      ,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display ":((  seems a bit empty"', () => {
    render(
      <BrowserRouter>
        <LandingPage {...mockProps} />
      </BrowserRouter>,
    );
    screen.getByText(':(( seems a bit empty');
  });
  test('should display button with test Sync', () => {
    render(
      <BrowserRouter>
        <LandingPage {...mockProps} />
      </BrowserRouter>,
    );
    screen.getByText('Sync');
  });
});
