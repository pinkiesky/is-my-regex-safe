<script lang="ts">
  import { getDirectLinkToCheck } from '$lib/getDirectLinkToCheck';
  import RegexCode from '$lib/components/RegexCode.svelte';

  const code = `const r = /(.*){1,32000}[bc]/i;
r.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');`;
  const furtherReading = [
    {
      url: 'https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS',
      title: 'Regular expression Denial of Service - ReDoS',
    },
    {
      url: 'https://www.regular-expressions.info/catastrophic.html',
      title: 'Runaway Regular Expressions: Catastrophic Backtracking',
    },
    {
      url: 'https://perlgeek.de/blog-en/perl-tips/in-search-of-an-exponetial-regexp.html',
      title: 'In search of an exponential time regex',
    },
    {
      url: 'https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/regular-expression-dos-and-node.md',
      title: 'Regular Expression DoS and Node.js',
    },
    {
      url: 'https://owasp.org/www-community/OWASP_Validation_Regex_Repository',
      title: 'OWASP Validation Regex Repository',
    },
    {
      url: 'https://xkcd.com/1313/',
      title: 'Regex Golf',
    },
  ];

  const vulnExamples = [
    {
      regexp: '^[a-zA-Z0-9_]+([.-][a-zA-Z0-9_]+)*$',
      title: 'User Login Validation',
      description: 'This regex is meant to validate user logins, allowing alphanumeric characters with dots or hyphens in between. The nested repetition of groups could lead to performance issues.',
    },
    {
      regexp: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
      title: 'Email Address Validation',
      description: 'This regex validates email addresses. The combination of multiple quantifiers and character classes for both the local part and domain part of the email can create performance issues with certain inputs.',
    },
    {
      regexp: '^(https?://)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(:[0-9]+)?(/.*)?$',
      title: 'URL Validation',
      description: 'This regex is aimed at validating URLs. However, the nested groups and multiple quantifiers (* and +) for different URL segments can lead to excessive backtracking, especially with malformed or very long inputs.',
    },
    {
      regexp: '^([0-9]{1,3}\.){3}[0-9]{1,3}$',
      title: 'IPv4 Address Validation',
      description: `Designed to validate IPv4 addresses, the repeated groups with quantifiers can be a source of performance degradation, especially if there's an attempt to input excessively long sequences of numbers and dots.`,
    },
    {
      regexp: '^([a-fA-F0-9]{64})+$',
      title: 'Hash Code Validation (e.g., SHA-256)',
      description: 'Intended to validate a SHA-256 hash, this regex can cause issues because of the + quantifier at the end, making it susceptible to long, repetitive, non-matching inputs.',
    },
    {
      regexp: '^([0-9]{4}-[0-9]{2}-[0-9]{2})+$',
      title: 'Date Validation (YYYY-MM-DD)',
      description: 'This regex is for validating dates in the YYYY-MM-DD format. The use of + at the end can lead to issues with long, non-matching inputs.',
    },
  ]
</script>

<div class="infoPanelRoot">
  <div class="infoPanel">
    <h4>Wait, regex may be unsafe?</h4>
    <p>
      Yes. Your regex may lead to a
      <abbr title="Regular expression Denial of Service">ReDoS</abbr> attack due to a catastrophic exponential-time
      regular expressions problem. For example, if you create a vulnerable regex for email checking,
      then hackers may easily DoS attack you via the login page.
    </p>
  </div>
  <div class="infoPanel">
    <h4>Could you proof it?</h4>
    <p>Sure, evaluate these codes in your console (<kbd>F12</kbd>) or Node REPL.</p>
    <pre><code>{code}</code></pre>
    <p>But the tab will freeze forever.</p>
  </div>
  <div class="infoPanel">
    <h4>Other examples of "evil regexp"</h4>
    <ul>
      {#each vulnExamples as { regexp, title, description }}
        <li>
          <a href={getDirectLinkToCheck(regexp)} target="_blank">{title}</a>: <RegexCode regexRaw={regexp} />
          <p>{description}</p>
        </li>
      {/each}
    </ul>
  </div>
  <div class="infoPanel">
    <h4>Further reading</h4>
    <ul>
      {#each furtherReading as { url, title }}
        <li>
          <a href={url} target="_blank">{title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
</style>
