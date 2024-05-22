import express from 'express';
import mongoose from 'mongoose';
import { handler } from './build/handler';
import { superConsole } from './utils';

// Verification checks
if (!process.env.PORT) {
	superConsole.warn('PORT is not defined in .env, switching to default port 3000.');
}

if (!process.env.MONGO_URI) {
	throw new Error('MONGO_URI is not defined in .env.');
}

if (!process.env.DB_USER) {
	throw new Error('DB_USER is not defined in .env.');
}

if (!process.env.DB_PASSWD) {
	throw new Error('DB_PASSWD is not defined in .env.');
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(handler);

app.use((req, res, next) => {
	console.log('');
	superConsole.info(`${req.method} - ${req.url} - ${res.statusCode}`, 'express.js');
	next();
});

app.listen(PORT, () => {
	superConsole.ready(`Server running on port ${PORT}.`, 'express.js');
	mongoose
		.connect(process.env.MONGO_URI as string)
		.then(() => {
			superConsole.ready('Connected to MongoDB!', 'mongoose');
			console.log('');
			superConsole.ready('App started!');
		})
		.catch((err) =>
			superConsole.error(
				'An error occurred while trying to connect to MongoDB:\n    ' + err,
				'mongoose'
			)
		);
});
