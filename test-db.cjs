const postgres = require('postgres');
const sql = postgres('postgresql://uladmin:2026Ulima!@api-mobile-db.cbk2ge28uibe.us-east-2.rds.amazonaws.com:5432/postgres?sslmode=require', { max: 1 });

async function run() {
  try {
    const periods = await sql`select * from academic_period`;
    console.log('Academic Periods:', periods);
    const weeks = await sql`select * from academic_week order by week_number`;
    console.log('Academic Weeks:', weeks);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await sql.end();
  }
}

run();

