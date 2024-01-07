import { vi, describe, it, expect, test } from 'vitest';

import { safeRegex } from 'safe-regex2';
import { regexpChecker } from './regexpChecker';

vi.mock('safe-regex2', () => {
  const fn = vi.fn();

  return {
    default: { myDefaultKey: fn },
    safeRegex: fn,
  }
})

describe('regexpChecker', () => {
  it('should call se2', () => {
    const res = regexpChecker('asd', true);
    expect(res.error).toBeFalsy();

    expect(vi.mocked(safeRegex)).toBeCalledTimes(1);
    expect(vi.mocked(safeRegex)).toBeCalledWith('asd');
  });

  describe('should return se2 result', () => {
    const call = () => regexpChecker('asd', true);

    test('false', () => {
      vi.mocked(safeRegex).mockReturnValue(false);
      expect(call().isSafe).toBe(false);  
    });

    test('true', () => {
      vi.mocked(safeRegex).mockReturnValue(true);
      expect(call().isSafe).toBe(true);  
    });
  });
});