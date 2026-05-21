const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new Database(dbPath, { readonly: true });

try {
  const stackItems = db.prepare("SELECT * FROM components_shared_stack_items").all();
  console.log("=== STACK ITEMS ===");
  console.log(stackItems);
} catch (error) {
  console.error("Error:", error);
} finally {
  db.close();
}
