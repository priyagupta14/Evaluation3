import { render } from '@testing-library/react';
import React from 'react';
import Song from './Song';

describe(Song.name, () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Song />,
    );
    expect(container).toMatchSnapshot();
  });
});
