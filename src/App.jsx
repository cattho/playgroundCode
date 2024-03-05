import React, { useState } from "react";
import "./styles/mainStyles.css";
import IframeComponent from "./components/IframeComponent";
import { Editor } from "@monaco-editor/react";
import NavBar from "./components/NavBar";

function App() {
  // Estado inicial para el editor HTML
  const initialStateHTML = `<!DOCTYPE html>
    <html>
    <head>
    <title>HTML, CSS and JavaScript demo</title>
    </head>
    <body>
    <!-- Tu código empieza aqui -->
    
    <h1 class="red" id="greetings" ></h1>
    
    <!-- Tu código termina aqui -->
    </body>
    </html>`;

  // Estado inicial para el editor CSS
  const initialStateCSS = `.red {
      color: red
  }`;

  // Estado inicial para el editor JavaScript
  const initialStateJs = `const saludo= "Hey Dev!!";
document.getElementById("greetings").innerHTML= saludo;`;

  // Estados iniciales de los editores
  const [htmlCode, setHtmlCode] = useState(initialStateHTML);
  const [jsCode, setJsCode] = useState(initialStateJs);
  const [cssCode, setCssCode] = useState(initialStateCSS);

  // Combinar códigos de los tres editores
  const combinedCode = `<html>${htmlCode}</html> <style>${cssCode}</style> <script>${jsCode}</script>`;
  // Convertir datos binarios o cualquier tipo de datos en una representación imprimible
  const encodedCode = btoa(combinedCode);
  // Generar una cadena de datos URI para la etiqueta <iframe>
  const iframeBase64 = `data:text/html;base64,${encodedCode}`;

  return (
    <>
      <NavBar />
      <div className='grid grid-cols-3 container-app h-screen w-full select-none'>
        <div className='editor-container'>
          <Editor
            className='h-full w-full max-h-[300px]'
            theme='vs-dark'
            id='html'
            value={htmlCode}
            onChange={(value) => setHtmlCode(value)}
            defaultLanguage='html'
          />
        </div>

        <div className='editor-container'>
          <Editor
            className='h-full w-full max-h-[300px]'
            theme='vs-dark'
            id='css'
            value={cssCode}
            onChange={(value) => setCssCode(value)}
            defaultLanguage='css'
          />
        </div>

        <div className='editor-container'>
          <Editor
            className='h-full w-full max-h-[300px]'
            theme='vs-dark'
            id='js'
            value={jsCode}
            onChange={(value) => setJsCode(value)}
            defaultLanguage='javascript'
          />
        </div>
        <IframeComponent userCode={iframeBase64} />
      </div>
    </>
  );
}

export default App;
