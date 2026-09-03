import '../styles/notes.css';

export default function Notes() {
  const sampleNotes = [
    { id: 1, title: 'JSX Syntax', content: 'JSX allows writing HTML tags inside JavaScript expressions cleanly.' },
    { id: 2, title: 'React Router', content: 'Handles navigation on the client side without reloading the browser page.' },
    { id: 3, title: 'Vercel Deployment', content: 'vercel.json prevents 404 routing issues on direct page refreshes.' }
  ];

  return (
    <main className="notes-container">
      <h1>Study & Reference Notes</h1>
      <div className="notes-grid">
        {sampleNotes.map((note) => (
          <div key={note.id} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
