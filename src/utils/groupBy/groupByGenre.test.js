import categoriedByGenre from './groupByGenre';

describe('Categorized by Genre', () => {
  let mockProps;
  beforeAll(() => {
    mockProps = {
      songs: [
        {
          genre: {
            name: 'pop',
          },
        },
        {
          genre: {
            name: 'bollywood',
          },
        },
      ],
    };
  });
  test('should categorized songs by genre', () => {
    const result = categoriedByGenre(mockProps.songs);
    expect(result).toEqual({ bollywood: [{ genre: { name: 'bollywood' } }], pop: [{ genre: { name: 'pop' } }] });
  });
});
