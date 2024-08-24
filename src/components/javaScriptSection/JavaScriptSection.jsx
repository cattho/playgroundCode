import { Editor } from "@monaco-editor/react";

const JavaScriptSection = ({ jsCode, setJsCode }) => {
  return (
    <div className='editor-container'>
      <Editor
        className='h-full w-full max-h-[300px]'
        theme='vs-dark'
        value={jsCode}
        onChange={(value) => setJsCode(value)}
        defaultLanguage='javascript'
      />
    </div>
  );
};

export default JavaScriptSection;
