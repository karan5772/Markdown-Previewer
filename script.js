
marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const defaultMarkdown = `# Welcome to Markdown Previewer
  ___

## Type your markdown here

Try some **bold** or *italic* text

- Unordered list item
- Another item

1. Ordered list item
2. Another item

\`\`\`javascript
// Code block
function hello() {
    console.log("Hello, Ashu!");
}
\`\`\`
`;


const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const resetButton = document.getElementById("reset");

const savedMarkdown = localStorage.getItem("markdownContent") || defaultMarkdown;
input.value = savedMarkdown
preview.innerHTML = marked.parse(input.value);

input.addEventListener("input", () => {
    localStorage.setItem("markdownContent", input.value);
    preview.innerHTML = marked.parse(input.value);
});

resetButton.addEventListener('click', () => {
    input.value = defaultMarkdown;
    preview.innerHTML = marked.parse(input.value);
    localStorage.removeItem("markdownContent");
});