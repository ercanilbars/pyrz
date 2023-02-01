import { ReactComponent as ReactLogo } from './logo.svg';

import './App.css';
import { renderToStaticMarkup } from "react-dom/server";


function App() {
  
  const svgString = encodeURIComponent(renderToStaticMarkup(<logo />))

  return (
    <div className="App">
      <ReactLogo/>
    </div>
  );
}

export default App;
