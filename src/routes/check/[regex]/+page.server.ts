import type { PageLoadData } from './$types';
import { regexpChecker } from '$lib/regexpChecker';

export async function load(data: PageLoadData) {
  const rawRegex = data.params.regex;
  return { rawRegex, result: regexpChecker(rawRegex, true) };
}
