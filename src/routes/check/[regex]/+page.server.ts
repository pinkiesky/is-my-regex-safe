import type { PageLoadData } from "./$types";
import { regexpChecker } from '$lib/regexpChecker';

export async function load({ params }: PageLoadData){
	return { result: regexpChecker(params.regex, true) };
}
