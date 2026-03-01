import getHealthStatus from '../index';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'critical'],
])('getHealthStatus(%p) should return %s', (character, expected) => {
  expect(getHealthStatus(character)).toBe(expected);
});
