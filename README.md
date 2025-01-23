
# PDF Generation App

This is a simple application for generating PDF files from user input.

## Features

- **Backend**: Node.js server generates PDF files using `pdf-lib`.
- **Frontend**: React.js app for user input and downloading the generated PDF.

## How to Run

### Prerequisites
- Node.js installed on your system.

### Setup Instructions

1. Clone the repository.
2. Navigate to the `backend` folder:
   ```bash
   cd backend
   npm install express body-parser pdf-lib
   node server.js
   ```
3. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   npm install axios
   npm start
   ```

4. Open the frontend in your browser and interact with the app.

### Usage
1. Enter a title and content in the frontend.
2. Click "Generate PDF."
3. Download the generated PDF file.

---
