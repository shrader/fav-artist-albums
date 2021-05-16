/* eslint-disable no-undef */
import formatDate from './helperFunctions';

describe('tests that helper functions work properly', () => {
  test('formatDate function formats date correctly', () => {
    const unformattedDate = '2016-01-15T08:00:00Z';
    expect(formatDate(unformattedDate)).toEqual('01-15-2016');
  });
});
