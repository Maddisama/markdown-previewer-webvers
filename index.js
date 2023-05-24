const { useState } = React;

const defaultText = `# Header 1
## Header 2
~[Link](https://www.google.com)~
\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Placeholder]( https://via.placeholder.com/150x150.png)


**Bold text**`;

const App = () => {
  const [edit, setEdit] = useState(defaultText);

  return (
    <div className="p-5">
      <h1 className="text-center markdown-heading">Markdown Editor</h1>
      <div className="container">
        <textarea
          name="editor"
          id="editor"
          cols="30"
          rows="10"
          className="editor-text"
          value={edit}
          onChange={(event) => setEdit(event.target.value)}
        ></textarea>
        <h2 className="text-center preview-heading">Preview</h2>
        <Preview markdown={edit} />
      </div>
    </div>
  );
};

const Preview = ({ markdown }) => {
  return (
    <div id="preview">
      <ReactMarkdown children={markdown} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
