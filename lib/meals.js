import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
    const meals = db.prepare("SELECT * FROM meals").all();
    return meals;
  } catch (err) {
    // Testing Error
    console.error("Error loading meals:", err.message);
    throw new Error("Loading meals failed...");
  }
}

export async function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals where slug = ?`).get(slug);
}
