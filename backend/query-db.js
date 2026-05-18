const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
    return;
  }
  console.log("Database opened successfully");
});

db.serialize(() => {
  // Query elements.list-item components
  db.all("SELECT * FROM components_elements_list_items", [], (err, rows) => {
    if (err) {
      console.error("Error querying list items:", err.message);
    } else {
      console.log("components_elements_list_items rows:", rows);
    }
  });

  // Query relations for media files
  db.all("SELECT * FROM files_related_morphs", [], (err, rows) => {
    if (err) {
      console.error("Error querying morphs:", err.message);
    } else {
      console.log("Morph files relations count:", rows.length);
      const filtered = rows.filter(r => r.related_type && r.related_type.includes('list-item'));
      console.log("Morph files relations for list-items:", filtered);
    }
  });
});

db.close();
db.close();
}
