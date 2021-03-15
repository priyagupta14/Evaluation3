import { render, screen } from '@testing-library/react';
import React from 'react';
import Song from './Song';

describe(Song.name, () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      song: {
        albumArtUrl: 'abc',
        genre: {
          name: 'pop',
        },
        artist: {
          name: 'neha',
        },
      },
      index: 5,
      status: {
        data: {
          like: true,
          count: 5,
        },
      },
      updateLikeState: jest.fn(),
    };
  });
  test('should match snapshot', () => {
    const { container } = render(
      <Song {...mockProps} />,
    );
    expect(container).toMatchSnapshot();
  });
  test('should display all the song details', () => {
    render(<Song {...mockProps} />);
    screen.getByText('pop');
    screen.getByText('neha');
    screen.getByText(5);
  });
});
