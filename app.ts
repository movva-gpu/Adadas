import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import * as sup3r from './utils/sup3r';

// Verification checks
if (!process.env.PORT) {
	sup3r.con.warn('PORT is not defined in .env, switching to default port 3000.');
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
		sup3r.con.warn(
			'No build/handler.js file, front is probably not built or an error has occurred while reading the file.'
		);
		sup3r.con.warn('More information:' + err);
	}

	return toReturn;
})();

const App = express();
const PORT = Object.freeze(process.env.PORT || 3000);

App.use(express.json());

App.use('/api', (_req, res, next) => {
	// TODO: implement an actual API
	sup3r.con.info('API not yet implemented.');
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
	sup3r.con.info(`${req.method} - ${req.url} - ${res.statusCode}`, 'express.js');
	next();
});

App.listen(PORT, () => {
	sup3r.con.ready(`Server running on port ${PORT}.`, 'express.js');
	mongoose
		.connect(process.env.MONGO_URI as string)
		.then(() => {
			sup3r.con.ready('Connected to MongoDB!', 'mongoose');
			console.log('');
			sup3r.con.ready('App started!');
		})
		.catch(err =>
			sup3r.con.error(
				'An error occurred while trying to connect to MongoDB:\n    ' + err,
				'mongoose'
			)
		);
});
