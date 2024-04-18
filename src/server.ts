import express from 'express';
import apiRouter from './api/api';

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use('/api', apiRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
