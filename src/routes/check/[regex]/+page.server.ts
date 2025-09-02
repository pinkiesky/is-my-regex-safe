import type { PageProps } from './$types';
import { regexpChecker } from '$lib/regexpChecker';

export async function load(data: PageProps) {
  const rawRegex = data.params.regex;
  return { rawRegex, result: regexpChecker(rawRegex, true) };
}
