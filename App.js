import logo from './logo.svg';
import './App.css';
import './Script.js';

function App() {
  return (
    <div className="App">
      <source>
      <html>
       <head>
         <Title>Minesweeper</Title>
       </head>
       <body>
         <h1>Minesweeper</h1>
         <table id="grid"></table>
         <button onClick="generateGrid();">Reset</button>
       </body>
       </html>
      </source>
     
    </div>
  );
}

export default App;