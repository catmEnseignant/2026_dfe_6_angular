const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware - CORS simple
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Lire la base de données
function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { patients: [] };
  }
}

// Écrire dans la base de données
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// GET tous les patients
app.get('/patients', (req, res) => {
  const db = readDB();
  res.json(db.patients);
});

// GET un patient par ID
app.get('/patients/:id', (req, res) => {
  const db = readDB();
  const patient = db.patients.find(p => p.id == req.params.id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// POST ajouter un patient
app.post('/patients', (req, res) => {
  const db = readDB();
  const newPatient = {
    id: db.patients.length > 0 ? Math.max(...db.patients.map(p => p.id)) + 1 : 1,
    ...req.body
  };
  db.patients.push(newPatient);
  writeDB(db);
  res.status(201).json(newPatient);
});

// PUT modifier un patient
app.put('/patients/:id', (req, res) => {
  const db = readDB();
  const index = db.patients.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    db.patients[index] = { ...db.patients[index], ...req.body };
    writeDB(db);
    res.json(db.patients[index]);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

// DELETE un patient
app.delete('/patients/:id', (req, res) => {
  const db = readDB();
  const index = db.patients.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    const deleted = db.patients.splice(index, 1);
    writeDB(db);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GET /patients - Get all patients`);
  console.log(`POST /patients - Add a patient`);
});
