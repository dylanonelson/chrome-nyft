const REGEX = new RegExp('New York Times', 'g');

function processNode(node) {
  if (REGEX.test(node.textContent)) {
    const { textContent } = node;
    node.textContent = textContent.replace(REGEX, 'New York Fucking Times');
  }
}

function onContentLoaded() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false,
  );

  let node = walker.nextNode();

  while (node) {
    processNode(node);
    node = walker.nextNode();
  }
}

let interval = setTimeout(onContentLoaded, 500);

const mutationObserver = new MutationObserver(function () {
  if (interval !== null) clearInterval(interval);
  interval = setTimeout(onContentLoaded, 500);
});

mutationObserver.observe(document.body, { childList: true });
