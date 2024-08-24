import { Editor } from "@monaco-editor/react";

const JavaScriptSection = ({ jsCode, setJsCode }) => {
  return (
    <div className='editor-container js-editor'>
      <h3>JavaScript + No-Library (pure JS)</h3>
      <Editor
        theme='vs-dark'
        value={jsCode}
        onChange={(value) => setJsCode(value)}
        defaultLanguage='javascript'
        options={{
          minimap: { enabled: false },
          lineNumbersMinChars: 2,
          glyphMargin: false,
          folding: true,
          scrollbar: {
            horizontal: 'hidden',
            vertical: 'hidden'
        }
        }}
      />
    </div>
  );
};

export default JavaScriptSection;
