import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((res) => setTimeout(res, 2000));
    throw new Error('Data not found');
    return db.prepare('SELECT * FROM meals').all();
}