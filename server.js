const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Expense = require('./model');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ── MongoDB Connect ──
mongoose.connect('mongodb://127.0.0.1:27017/expenseDB')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection FAILED:", err.message);
    console.error("👉 Make sure MongoDB is running: start it with 'mongod' in a separate terminal");
  });

// ── TEST ROUTE (open this in browser to confirm server works) ──
app.get('/test', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
  res.json({
    server: 'running ✅',
    mongodb: states[dbState] + (dbState === 1 ? ' ✅' : ' ❌'),
    time: new Date()
  });
});

// ── ADD ──
app.post('/add', async (req, res) => {
  console.log("📥 POST /add received:", req.body);
  try {
    const { title, amount, type } = req.body;

    if (!title || !amount || !type) {
      console.log("❌ Validation failed - missing fields:", { title, amount, type });
      return res.status(400).json({ error: 'title, amount, and type are required' });
    }

    const data = new Expense({ title, amount: parseFloat(amount), type });
    await data.save();
    console.log("✅ Saved:", data);
    res.json(data);
  } catch (err) {
    console.error("❌ Error saving:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── GET ALL ──
app.get('/all', async (req, res) => {
  console.log("📤 GET /all requested");
  try {
    const data = await Expense.find().sort({ date: -1 });
    console.log(`✅ Returning ${data.length} records`);
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── DELETE ──
app.delete('/delete/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
  console.log("🔍 Test your server at http://localhost:3000/test");
});