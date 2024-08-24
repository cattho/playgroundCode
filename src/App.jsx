import "./styles/mainStyles.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import HtmlSection from "./components/htmlSection/HtmlSection";
import CssSection from "./components/cssSection/CssSection";
import JavaScriptSection from "./components/javaScriptSection/JavaScriptSection";
import IframeComponent from "./components/iframeSection/IframeComponent";

function App() {
  // Estado inicial para el editor HTML
  const initialStateHTML = `<!DOCTYPE html>
    <html>
    <head>
    <title>HTML, CSS and JavaScript demo</title>
    </head>
    <body>
    <!-- Tu código empieza aqui -->
    
    <h1 class="tittle" id="greetings" ></h1>
    
    <!-- Tu código termina aqui -->
    </body>
    </html>`;

  // Estado inicial para el editor CSS
  const initialStateCSS = `.tittle {
      color: #fff
  }`;

  // Estado inicial para el editor JavaScript
  const initialStateJs = `const saludo= "Hola Dev!!";
document.getElementById("greetings").innerHTML= saludo;`;

  // Estados iniciales de los editores
  const [htmlCode, setHtmlCode] = useState(initialStateHTML);
  const [cssCode, setCssCode] = useState(initialStateCSS);
  const [jsCode, setJsCode] = useState(initialStateJs);

  // Combinar códigos de los tres editores
  const combinedCode = `<html>${htmlCode}</html> <style>${cssCode}</style> <script>${jsCode}</script>`;
  // Convertir datos binarios o cualquier tipo de datos en una representación imprimible
  const encodedCode = btoa(combinedCode);
  // Generar una cadena de datos URI para la etiqueta <iframe>
  const iframeBase64 = `data:text/html;base64,${encodedCode}`;

  return (
    <div className='container-app'>
      <HtmlSection htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
      <CssSection cssCode={cssCode} setCssCode={setCssCode} />
      <JavaScriptSection jsCode={jsCode} setJsCode={setJsCode} />
      <IframeComponent userCode={iframeBase64} />
    </div>
  );
}

export default App;
