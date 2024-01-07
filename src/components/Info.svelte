<div class="infoPanelRoot">
  <div class="infoPanel">
    <h2>Wait, regex may be unsafe?</h2>
    <p>Yes. You regex may lead to DoS atack due to star problem</p>
  </div>
  <div class="infoPanel">
    <h2>Could you proof it?</h2>
    <p>Sure, just evaluate in your console (<kbd>F12</kbd>) or Node REPL these code.</p>
    <p>But the tab is freeze forever.</p>

    <p>
      <code> const r = /(.*)&lbrace;(1, 32000)&rbrace;[bc]/i; r.test('aaaaaaaaaaaaaaaaaaa') </code>
    </p>

    Further reading: <a target="_blank" href="https://example.com">link1</a>
  </div>
</div>
