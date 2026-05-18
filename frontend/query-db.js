const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', '..', '..', '..', 'backend', '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
    return;
  }
  console.log("Database opened successfully");
});

db.serialize(() => {
  // 1. List all tables to see what we have
  db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, tables) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Tables in database:", tables.map(t => t.name).join(", "));
  });

  // 2. Query any interactive list items components
  db.all("SELECT * FROM components_elements_list_items", [], (err, rows) => {
    if (err) {
      console.error("Error querying list items:", err.message);
    } else {
      console.log("components_elements_list_items rows:", rows);
    }
  });

  // 3. Query relations/links for list item images
  db.all("SELECT * FROM files_related_morphs", [], (err, rows) => {
    if (err) {
      console.error("Error querying morphs:", err.message);
    } else {
      const filtered = rows.filter(r => r.related_type && r.related_type.includes('list-item'));
      console.log("Morph files relations for list-items:", filtered);
    }
  });
});

db.close();
