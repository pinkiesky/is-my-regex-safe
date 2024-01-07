import { safeRegex } from 'safe-regex2';

export enum RegexStatus {
  invalidJsRegex,
  unsafe,
  safe,
  validationError,
}

export interface CheckResult {
  error?: string;
  status: RegexStatus;
  regexRaw: string;
}

export function regexpChecker(regexRaw: string, checkForValidity: boolean): CheckResult {
  if (checkForValidity) {
    try {
      new RegExp(regexRaw);
    } catch (err: unknown) {
      return {
        regexRaw,
        status: RegexStatus.invalidJsRegex,
        error: err?.toString() ?? 'unknown',
      };
    }
  }

  try {
    return {
      status: safeRegex(regexRaw) ? RegexStatus.safe : RegexStatus.unsafe,
      regexRaw,
    };
  } catch (err: unknown) {
    return {
      regexRaw,
      status: RegexStatus.validationError,
      error: err?.toString() ?? 'unknown',
    };
  }
}
