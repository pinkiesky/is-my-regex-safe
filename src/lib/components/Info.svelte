<script lang="ts">
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
    <p>
      Also, here is
      <a
        href="/check/%5E(%5Ba-zA-Z0-9_%5C.%5C-%5D)%2B%5C%40((%5Ba-zA-Z0-9%5C-%5D)%2B%5C.)%2B(%5Ba-zA-Z0-9%5D%7B2%2C4%7D)%2B%24"
        >a more realistic email regex</a
      >
      as an example.
    </p>
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
