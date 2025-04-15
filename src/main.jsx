import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function Note({ note }) {
  return (
    <div
      style={{
        width: '300px',
        background: 'black',
        padding: '5px',
        marginTop: '10px',
        color: 'white'
      }}
    >
      <p>{note.text}</p>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim() === '') return;
    const newNote = {
      id: notes.length,
      text: noteText,
    };
    setNotes([...notes, newNote]);
    setNoteText('');
  };

  return (
    <div>
      <header>
        <h1>NEW NOTE ENTRY</h1>
        <textarea
          name="note"
          placeholder="Enter Text Here..."
          style={{ resize: 'none', width: '100%', height: '200px' }}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <br />
        <button onClick={addNote}>Click me to save note!</button>
      </header>

      <div id="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
