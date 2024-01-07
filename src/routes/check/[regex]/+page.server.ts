import type { PageLoadData } from './$types';
import { regexpChecker } from '$lib/regexpChecker';

export async function load(data: PageLoadData) {
  return { result: regexpChecker(data.params.regex, true) };
}
