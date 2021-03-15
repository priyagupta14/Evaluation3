import { render, screen } from '@testing-library/react';
import React from 'react';
import NavBar from './NavBar';

describe(NavBar.name, () => {
  test('should match snapshot', () => {
    const { container } = render(
      <NavBar />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "My Record Shelf"', () => {
    render(<NavBar />);
    screen.getByText('My Record Shelf');
  });
});
