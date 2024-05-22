import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
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

const hasBeenBuilt = ((): false | string => {
	let toReturn: false | string = false;
	try {
		toReturn = fs.readFileSync('./build/handler.js').toString('utf-8');
	} catch (err) {
		superConsole.warn(
			'No build/handler.js file, front is probably not built or an error has occurred while reading the file.'
		);
		superConsole.warn('More information:' + err);
	}

	return toReturn;
})();

const App = express();
const PORT = Object.freeze(process.env.PORT || 3000);

App.use(express.json());

App.use('/api', (_req, res, next) => {
	// TODO: implement an actual API
	superConsole.info('API not yet implemented.');
	res.status(404);
	next();
})

// If in production, or if vite has been built, use its handler
if ((process.env.PRODUCTION && hasBeenBuilt) || hasBeenBuilt) {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { handler } = await import('./build/handler');
	App.use(handler);
}

App.use((req, res, next) => {
	console.log('');
	superConsole.info(`${req.method} - ${req.url} - ${res.statusCode}`, 'express.js');
	next();
});

App.listen(PORT, () => {
	superConsole.ready(`Server running on port ${PORT}.`, 'express.js');
	mongoose
		.connect(process.env.MONGO_URI as string)
		.then(() => {
			superConsole.ready('Connected to MongoDB!', 'mongoose');
			console.log('');
			superConsole.ready('App started!');
		})
		.catch(err =>
			superConsole.error(
				'An error occurred while trying to connect to MongoDB:\n    ' + err,
				'mongoose'
			)
		);
});
