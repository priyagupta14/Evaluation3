import { render, screen } from '@testing-library/react';
import React from 'react';
import CategorizedSong from './CategorizedSong';

describe(CategorizedSong.name, () => {
  test('should match snapshot', () => {
    const { container } = render(
      <CategorizedSong />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "generes"', () => {
    render(<CategorizedSong />);
    screen.getByText(':(( seems a bit empty');
  });
});
