module.exports = {
    ...require('./users')
}

async function connect() {
    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }
  