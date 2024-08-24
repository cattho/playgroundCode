import { Editor } from "@monaco-editor/react";

const HtmlSection = ({ htmlCode, setHtmlCode }) => {
  return (
    <div className='editor-container html-editor'>
      <h3>HTML</h3>
      <Editor
        theme='vs-dark'
        value={htmlCode}
        onChange={(value) => setHtmlCode(value)}
        defaultLanguage='html'
        options={{
          minimap: { enabled: false },
          lineNumbersMinChars: 2,
          glyphMargin: false,
          folding: true,
          scrollbar: {
            horizontal: "hidden",
            vertical: "hidden",
          },
        }}
      />
    </div>
  );
};

export default HtmlSection;
