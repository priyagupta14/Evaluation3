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
  test('should display MyRecordShelf', () => {
    render(<LandingPage />);
    screen.getByText('MyRecordShelf');
  });
  test('should display all songs', () => {
    render(<LandingPage />);
    screen.getByText('all songs');
  });
});
