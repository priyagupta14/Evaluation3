import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllSongs from './AllSongs';

describe(AllSongs.name, () => {
  beforeAll(() => {

  });
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter><AllSongs /></BrowserRouter>
      ,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "all Songs"', () => {
    render(<BrowserRouter><AllSongs /></BrowserRouter>);
    screen.getByText('all Songs');
  });
});
