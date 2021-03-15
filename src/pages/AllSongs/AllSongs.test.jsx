import { render, screen } from '@testing-library/react';
import React from 'react';
import AllSongs from './AllSongs';

describe(AllSongs.name, () => {
  test('should match snapshot', () => {
    const { container } = render(
      <AllSongs />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "all Songs"', () => {
    render(<AllSongs />);
    screen.getByText('all Songs');
  });
});
