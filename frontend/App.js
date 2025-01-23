
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/generate-pdf',
        { title, content },
        { responseType: 'blob' } // To handle binary data
      );

      // Create a link to download the PDF
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'generated.pdf';
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Generate PDF</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '10px', display: 'block', width: '100%' }}
      />
      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '10px', display: 'block', width: '100%', height: '100px' }}
      />
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
}

export default App;
