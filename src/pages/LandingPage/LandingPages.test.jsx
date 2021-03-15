import { render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from './LandingPage';

describe(LandingPage.name, () => {
  test('should match snapshot', () => {
    const { container } = render(
      <LandingPage />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display ":((  seems a bit empty"', () => {
    render(<LandingPage />);
    screen.getByText(':(( seems a bit empty');
  });
  test('should display button with test Sync', () => {
    render(<LandingPage />);
    screen.getByText('Sync');
  });
});
