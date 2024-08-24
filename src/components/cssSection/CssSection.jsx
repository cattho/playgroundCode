import { Editor } from "@monaco-editor/react";

const CssSection = ({ cssCode, setCssCode }) => {
  return (
    <div className='editor-container'>
      <Editor
        className='h-full w-full max-h-[300px]'
        theme='vs-dark'
        value={cssCode}
        onChange={(value) => setCssCode(value)}
        defaultLanguage='css'
      />
    </div>
  );
};

export default CssSection;
