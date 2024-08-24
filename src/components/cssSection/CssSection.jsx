import { Editor } from "@monaco-editor/react";

const CssSection = ({ cssCode, setCssCode }) => {
  return (
    <div className='editor-container css-editor'>
      <h3>CSS</h3>
      <Editor
        theme='vs-dark'
        value={cssCode}
        onChange={(value) => setCssCode(value)}
        defaultLanguage='css'
        options={{
          minimap: { enabled: false },
          lineNumbersMinChars: 2,
          glyphMargin: false,
          folding: true,
          scrollbar: {
            horizontal: 'hidden',
            vertical: 'hidden'
          },
        }}
      />
    </div>
  );
};

export default CssSection;
