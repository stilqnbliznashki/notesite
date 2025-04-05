import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  const addNote = () => {
    const container = document.getElementById('notes-container');
    const entry = document.getElementById('noteT');
    const txt = document.createElement('p');
    txt.style.width = '300px';
    txt.style.background = 'gray'
    txt.style.padding = '5px'
    const br = document.createElement('br');
    txt.textContent = entry.value;
    entry.value = '';
    container.appendChild(br);
    container.appendChild(txt);
  };

  return (
    <div>
      <header>
        <h1>NEW NOTE ENTRY</h1>
        <textarea name="note" id="noteT" placeholder="Enter Text Here..." style={{ resize: 'none', width: '100%', height: '200px'}}></textarea>
        <br/>
        <button onClick={addNote}>Click me to save note!</button>
      </header>
      <div id="notes-container"></div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
