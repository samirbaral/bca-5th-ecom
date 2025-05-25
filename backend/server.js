const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Config
dotenv.config({ path: 'config/config.env' });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});

// Unhandled Promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
