import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategorizedSong from './CategorizedSong';

describe(CategorizedSong.name, () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      songs: [
        {
          a: [{
            id: 1234,
            status: 'avx',
          }],
        },
      ],
      updateLikeState: jest.fn(),
    };
  });
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <CategorizedSong {...mockProps} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "generes"', () => {
    render(
      <BrowserRouter>
        <CategorizedSong {...mockProps} />
      </BrowserRouter>,
    );
    screen.getByText(':(( seems a bit empty');
  });
});
