import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllSongs from './AllSongs';

describe(AllSongs.name, () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      allSongs: [{
        id: '1234',
        name: 'abc',
        albumArtUrl: 'abc',
        genre: {
          name: 'abc',
        },
        artist: {
          name: 'abc',
        },

        status: {
          data: {
            like: true,
            count: 5,
          },
        },
      },
      ],
      updateLikeState: jest.fn(),
    };
  });
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter><AllSongs {...mockProps} /></BrowserRouter>
      ,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display "all Songs"', () => {
    render(<BrowserRouter><AllSongs {...mockProps} /></BrowserRouter>);
    screen.getByText('all songs');
  });
});
