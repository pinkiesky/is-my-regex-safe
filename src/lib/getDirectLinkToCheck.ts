export function getDirectLinkToCheck(regexRaw: string) {
  return '/check/' + encodeURIComponent(regexRaw);
}
