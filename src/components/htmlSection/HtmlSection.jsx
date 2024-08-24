import { Editor } from "@monaco-editor/react";

const HtmlSection = ({ htmlCode, setHtmlCode }) => {
  return (
    <div className='editor-container'>
      <Editor
        className='h-full w-full max-h-[300px]'
        theme='vs-dark'
        value={htmlCode}
        onChange={(value) => setHtmlCode(value)}
        defaultLanguage='html'
      />
    </div>
  );
};

export default HtmlSection;
