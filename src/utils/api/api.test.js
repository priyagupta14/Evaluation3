import axios from 'axios';

describe('Api Utils', () => {
  let axiosGetMock;
  let axiosPostMock;
  let headers;
  beforeEach(() => {
    axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockClear();
    axiosGetMock.mockResolvedValue({ data: null });

    axiosPostMock = jest.spyOn(axios, 'post');
    axiosPostMock.mockClear();
    axiosPostMock.mockResolvedValue({ data: null });
    header = {
      Authorization: 'abc',
    };
  });
});
