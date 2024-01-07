import { safeRegex } from 'safe-regex2';

export interface CheckResult {
  error?: string;
  isSafe?: boolean;
  isValidJsRegex?: boolean;
}

export function regexpChecker(regexRaw: string, checkForValidity: boolean): CheckResult {
  const result: CheckResult = {};

  if (checkForValidity) {
    try {
      new RegExp(regexRaw);
      result.isValidJsRegex = true;
    } catch (err: unknown) {
      return {
        isValidJsRegex: false,
        error: err?.toString() ?? 'unknown'
      }
    }
  }

  try {
    result.isSafe = safeRegex(regexRaw);
  } catch (err: unknown) {
    return {
      ...result,
      isSafe: false,
      error: err?.toString() ?? 'unknown',
    }
  }

  return result;
}
