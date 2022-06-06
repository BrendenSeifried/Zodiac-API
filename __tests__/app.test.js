const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('Zodiac-API routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('list of zodiacs tested here', async () => {
    const resp = await request(app).get('/zodiacs');
    const expected = zodiacs.map((item) => {
      return {
        id: item.id,
        name: item.name,
        dates: item.dates,
        symbol: item.symbol,
      };
    });
    expect(resp.body).toEqual(expected);
  });

  it('checking single zodiac test', async () => {
    const resp = await request(app).get('/zodiacs/5');
    const testingFive = {
      id: '5',
      name: 'gemini',
      dates: 'May 21 - Jun 20',
      symbol: 'Twins',
    };
    expect(resp.body).toEqual(testingFive);
  });

  afterAll(() => {
    pool.end();
  });
});
