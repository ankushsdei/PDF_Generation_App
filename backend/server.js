
const express = require('express');
const bodyParser = require('body-parser');
const { PDFDocument, rgb } = require('pdf-lib');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Endpoint to generate PDF
app.post('/generate-pdf', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    // Set title and content
    page.drawText(title, {
      x: 50,
      y: height - 50,
      size: 24,
      color: rgb(0, 0.53, 0.71),
    });

    page.drawText(content, {
      x: 50,
      y: height - 100,
      size: 14,
      color: rgb(0, 0, 0),
    });

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.send(pdfBytes);
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Error generating PDF');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
