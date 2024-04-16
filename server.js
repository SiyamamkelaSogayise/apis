const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const sql = require('mssql');
const path = require('path'); // Import path module

const app = express();
const port = 1434; // Change this to your desired port number

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Multer configuration to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files should be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for the uploaded file
  }
});

const upload = multer({ storage: storage });

// SQL Server configuration
const config = {
  user: 'BWB\\Siyamamkela.Sogayise', // Corrected the user format
  server: 'PC025_MAINFLOOR',
  database: 'LetsGetBraided',
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

// Endpoint to handle form submissions
app.post('/submit-form', upload.single('fileToUpload'), async (req, res) => {
  try {
    // Connect to the database
    await sql.connect(config);

    // Extract form data from the request body
    const { name, surname, email, date, time, hair_length, braid_type, hair_size, message } = req.body;

    // Save the form data to the database
    await sql.query`INSERT INTO Bookings (name, surname, email, date, time, hair_length, braid_type, hair_size, message)
                    VALUES (${name}, ${surname}, ${email}, ${date}, ${time}, ${hair_length}, ${braid_type}, ${hair_size}, ${message})`;

    // Send a response (e.g., confirmation message)
    res.send('Form submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
    
  } finally {
    // Close the database connection
    await sql.close();
  }
});

// Serve static files (index.html, etc.) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
